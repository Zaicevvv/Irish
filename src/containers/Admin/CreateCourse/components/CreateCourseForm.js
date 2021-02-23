import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTE_TO_ADMIN_COURSES } from "../../../../constants/routes";
import placeholder from "../../../../assets/images/dest/ava.png";
import _ from "lodash";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CreateCourseForm = ({ onFormSubmit, reqErrors }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [uploadedFileName, setUploadedFileName] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onSubmit = (data) => {
    let body = new FormData();

    if (uploadedFile && typeof uploadedFile === "object") {
      body.append("[category][icon]", uploadedFile);
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
    setUploadedFileName();
    setUploadedFile();
  };

  return (
    <div className="createCourseForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="actionButtons">
          <Link to={ROUTE_TO_ADMIN_COURSES} className="alertColor">
            Cancel
          </Link>
          <button type="submit">CREATE COURSE</button>
        </div>
        <h3 className="courseFormName">Add new course</h3>
        <div className="w-660">
          <div className="mb-30 row">
            <div className="placeholder_img">
              <label htmlFor="course_img" className="ava_change_label">
                {uploadedFileName ? (
                  <p className="course_image_name">{uploadedFileName}</p>
                ) : (
                  <img src={placeholder} className="upload_img" />
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
                Add image
              </label>
              <button onClick={imageDeleteHandler} className="ava_delete_label">
                Delete
              </button>
            </div>
          </div>
          <input
            className="courseFormInput w-full"
            name="title"
            ref={register({ required: true, max: 100 })}
            placeholder="Tittle (max 100 characters)"
          />
          {errors && errors.title && (
            <span className="error">Please, add valid title</span>
          )}

          <input
            className="courseFormInput w-full"
            name="description"
            ref={register({ required: true, max: 1000 })}
            placeholder="Description (max 1 000 characters)"
          />
          {errors && errors.description && (
            <span className="error">Please, add valid description</span>
          )}

          {reqErrors.title &&
            reqErrors.title.length > 0 &&
            reqErrors.title.map((error) => (
              <span className="error">
                {error}
                <br />
              </span>
            ))}

          {/* <p className='formTip'>Must be minimum 6 characters long, with at least one capital letter and one number.</p> */}
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

          <button type="submit" className="button courseFormSubmit fill">
            Add Lessons
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ admin }) => {
  const data = {
    reqErrors: admin.errors,
  };
  return data;
};

CreateCourseForm.propTypes = {};

export default connect(mapStateToProps, null)(CreateCourseForm);
