import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import CloseIcon from "@material-ui/icons/Close";

const QuizForm = ({ item, index, handleChange, deleteImage }) => {
  const [qImageUrl, setQImageUrl] = useState();

  const handleRadioFieldChange = (e) => {
    handleChange(index, "correct", e.target.value == "true");
  };

  const handleFieldChange = (key, value) => {
    handleChange(index, key, value);
  };

  const changeImageHandler = (file) => {
    setQImageUrl(URL.createObjectURL(file));
    handleChange(index, "image", file);
  };

  const handleDeleteImage = (event) => {
    event.preventDefault();
    setQImageUrl(null);
  };

  return (
    <div className="container quiz_flex">
      <div className="quiz_container">
        <input
          type="text"
          value={item.question}
          onChange={(e) => handleFieldChange("question", e.target.value)}
          name="question"
          placeholder={index + 1 + " Question Title"}
          className="courseFormInput w-full"
        />

        <div className="row aling-center">
          <RadioGroup
            className="radio_group row"
            aria-label="correct"
            name="correct"
            value={item.correct}
            onChange={handleRadioFieldChange}
          >
            <FormControlLabel value={true} control={<Radio />} label="True" />
            <FormControlLabel value={false} control={<Radio />} label="False" />
          </RadioGroup>
        </div>
      </div>
      <div>
        <input
          type="file"
          id="quizImage"
          name="quizImage"
          onChange={(e) => changeImageHandler(e.target.files[0])}
          className="quiz_image_input"
          accept="image/*"
        />
        <label
          className="quiz_image_input_label"
          htmlFor="quizImage"
        >
          <span className="quiz_image_input_span">
            {qImageUrl ? (
              <>
                <div className='q_image' style={{backgroundImage: 'url(' + qImageUrl + ')'}}></div>
                <span className="quiz_image_delete" onClick={(e) => handleDeleteImage(e)}>
                  <CloseIcon />
                </span>
              </>
            ) : (
              <AddPhotoIcon />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default QuizForm;
