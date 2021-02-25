import React, { useState } from "react";
import placeholder from "../assets/images/dest/ava.png";
import config from "../config";

const AvatarUpload = ({ onAvaSubmit, avatar }) => {
  const [avaImg, setAvaImg] = useState(placeholder);

  const changeHandler = (img) => {
    onAvaSubmit(img);
  };

  const deleteHandler = () => {
    onAvaSubmit();
  };

  return (
    <div className="avatart_wrapper row">
      <div>
        <img
          src={avatar ? config.REACT_APP_ROOT + avatar : avaImg}
          className="avatart_img"
        />
      </div>
      <div>
        <input
          type="file"
          id="avatar"
          onChange={(e) => changeHandler(e.target.files)}
          className="avatar_input"
        />
        <p className="upoload_descr">Your profile photo</p>
        <label htmlFor="avatar" className="ava_change_label">
          Change
        </label>
        <button className="ava_delete_label" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AvatarUpload;
