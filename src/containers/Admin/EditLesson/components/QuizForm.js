import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import CloseIcon from "@material-ui/icons/Close";

const QuizForm = ({ item, index, handleChange, deleteImage }) => {
  const handleRadioFieldChange = (e) => {
    handleChange(index, "correct", e.target.value == "true");
  };
  const handleFieldChange = (key, value) => {
    handleChange(index, key, value);
  };

  const handleDeleteImage = () => deleteImage(index);

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
          id="image"
          onChange={(e) => handleFieldChange("image", e.target.files)}
          className="quiz_image_input"
          accept="image/*"
        />
        <label
          htmlFor="image"
          className="quiz_image_input_label"
          htmlFor="attachment_add"
        >
          <span className="quiz_image_input_span">
            {item.quizImage ? (
              <>
                <img src={item.quizImage} alt="image" />
                <span className="quiz_image_delete" onClick={handleDeleteImage}>
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
