import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const UserItem = ({ item, index, handlerDelete, popupShow, setPopupShow }) => {

    const handleClickOpen = () => {
        setPopupShow(index);
    };

    const handleClose = () => {
        setPopupShow();
    };

    return (
        <tr className='container userlist_item'>
            <td>
                <p className='user_name'>{`${item.first_name} ${item.last_name}`}</p>
            </td>
            <td>
                <p className='user_email'>{item.email}</p>
            </td>
            <td>
                <p className='user_paid'>{item.paid}</p>
            </td>
            <td>
                <p className='user_created'>{item.created_at}</p>
            </td>
            <td className='user_item_actions'>
                <a href='#' onClick={handleClickOpen} ><DeleteForeverIcon /></a>
            </td>

            <Dialog
                open={popupShow == index}
                fullWidth={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Delete "{`${item.first_name} ${item.last_name}`}"?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Disagree
                </Button>
                    <Button onClick={() => handlerDelete(item.id)} color="secondary">
                        Delete
                </Button>
                </DialogActions>
            </Dialog>
        </tr>
    )
}


export default UserItem
