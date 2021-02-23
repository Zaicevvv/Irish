import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routeToLessonEdit } from "../../../../constants/routes";
import LessonListItem from "./LessonListItem";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import placeholder from "../../../../assets/images/dest/ava.png";
import config from "../../../../config";
import _ from "lodash";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const EditCourseForm = ({
  onFormSubmit,
  handlerDelete,
  reqErrors,
  category,
  handlerLessonDelete,
  inProcess,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const [open, setOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("+ Add image");
  const [uploadedFile, setUploadedFile] = useState();
  const [deleteFlag, setDeleteFlag] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(category.remote_learning || false);
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const targetImage =
    category && category.icon ? category.icon.url : placeholder;

  const onSubmit = (data) => {
    let body = new FormData();

    if (uploadedFile && typeof uploadedFile === "object") {
      body.append("[category][icon]", uploadedFile);
    }
    if (uploadedFile && uploadedFile == "delete") {
      body.append("[category][icon]", null);
    }
    _.mapKeys(data, (value, key) => {
      if (key != "course_img") {
        body.append(`[category][${key}]`, value);
      }
    });

    body.append("[category][remote_learning]", checked);

    onFormSubmit(body);
  };

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      setUploadedFile(e.target.files[0]);
    }
  };

  const imageDeleteHandler = (e) => {
    e.preventDefault();
    setUploadedFileName("+ Add image");
    setUploadedFile("delete");
    setDeleteFlag(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="editCourseForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="actionButtons">
          <a className="alertColor" onClick={handleClickOpen}>
            DELETE COURSE
          </a>
          {!inProcess ? (
            <button disabled={inProcess} type="submit">
              SAVE CHANGES
            </button>
          ) : (
            <button disabled>LOADING...</button>
          )}
        </div>
        <h3 className="courseFormName">Edit course</h3>
        <div className="w-660">
          <div className="mb-30 row">
            <div className="placeholder_img">
              <label htmlFor="course_img">
                {targetImage && !deleteFlag ? (
                  <img
                    src={config.REACT_APP_ROOT + targetImage}
                    className="w-full"
                  />
                ) : (
                  <p className="course_image_name">{uploadedFileName}</p>
                )}
              </label>
            </div>
            <div>
              <input
                onChange={fileChangeHandler}
                type="file"
                name="course_img"
                id="course_img"
                className="avatar_input"
              />
              {/* <p className='upoload_descr'>Add image</p> */}
              <label htmlFor="course_img" className="ava_change_label">
                Change
              </label>
              <button className="ava_delete_label" onClick={imageDeleteHandler}>
                Delete
              </button>
            </div>
          </div>
          <p className="input_group_label">Main info about course</p>
          <input
            className="input_dark w-full"
            name="title"
            ref={register({ required: true, max: 100 })}
            defaultValue={category.title}
            placeholder="Tittle (max 100 characters)"
          />
          {errors && errors.title && (
            <span className="error">Please, add valid title</span>
          )}

          <input
            className="input_dark w-full"
            name="description"
            ref={register({ required: true, max: 1000 })}
            defaultValue={category.description}
            placeholder="Description (max 1 000 characters)"
          />
          {errors && errors.description && (
            <span className="error">Please, add valid description</span>
          )}

          {reqErrors &&
            reqErrors.title &&
            reqErrors.title.length > 0 &&
            reqErrors.title.map((error) => (
              <span className="error">
                {error}
                <br />
              </span>
            ))}
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Remote learning course"
          />
          <p className="input_group_label">List of the Module:</p>

          {/* LIST OF LESSONS */}
          {category.tutorials.map((item, index) => {
            return (
              <LessonListItem
                category_id={category.id}
                handlerDelete={handlerLessonDelete}
                key={index}
                item={item}
                index={index}
              />
            );
          })}

          <Link
            to={routeToLessonEdit(category.id)}
            className="button courseFormSubmit fill"
          >
            Add Lessons
          </Link>
        </div>
      </form>
      <Dialog
        open={open}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete "{category.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => handlerDelete(category.id)} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ admin }) => {
  const data = {
    reqErrors: admin.errors,
    inProcess: admin.inProcess,
  };
  return data;
};

EditCourseForm.propTypes = {};

export default connect(mapStateToProps, null)(EditCourseForm);
