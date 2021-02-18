import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { routeToCourseEdit } from '../../../../constants/routes'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CourseListItem = ({ course, handlerDelete }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="topic-item">
      <div className='row justify-between item'>
        {course.title}
        <div className='topic_item_actions row align-center'>
          <Link to={routeToCourseEdit(course.id)}><EditIcon /></Link>
          <a href='#' onClick={handleClickOpen} ><DeleteForeverIcon /></a>
        </div>
      </div>
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
            Delete "{course.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={() => handlerDelete(course.id)} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )

};

export default CourseListItem;