import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFeedbacksAction,
  addFeedbackAction,
  editFeedbackAction,
} from "../../actions";
import {
  errorNotificationAction,
  successNotificationAction,
} from "../../../Notifications/actions";
import StaticPage from "../../../../components/StaticPage";
import headerData from "../../../../constants/navData";
import { ROUTE_TO_TESTIMONIALS } from "../../../../constants/routes";

const FeedbackForm = ({
  getFeedbacks,
  onCreate,
  onEdit,
  feedbacks,
  errorNotification,
  successNotification,
  match,
}) => {
  const [testimonial, setTestimonial] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (match.params.id) {
      getFeedbacks();

      setTimeout(() => {setTestimonial(...feedbacks.find(el => el.id === Number(match.params.id)))}, [1000]);
    }
    // console.log(...feedbacks.find(el => el.id === Number(match.params.id)))
    setTimeout(()=>{console.log(feedbacks)},[1000])
  }, []);

  const handleChange = (e) =>
    setTestimonial({ ...testimonial, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(testimonial);
    match.params.id
      ? onEdit(match.params.id, { testimonial: testimonial })
      : onCreate({ testimonial: testimonial });
  }
  
  // const handleSubmit = () => {
  //   let body = new FormData();

  //   body.append("testimonial", testimonial);

  //   onCreate(body);
  // };

  return (
    <StaticPage pageClass="feedbacks_list" headerData={headerData.admin}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="actionButtons">
            <Link to={ROUTE_TO_TESTIMONIALS} className="alertColor">
              Cancel
            </Link>
            <button type="submit">
              {match.params.id
                ? "EDIT FEEDBACK"
                : "ADD FEEDBACK"}
            </button>
          </div>
          <h3>
            {match.params.id
              ? "Edit testimonial"
              : "Create testimonial"}
          </h3>
          <input
            id="title"
            type="text"
            placeholder="Your name"
            value={testimonial.title}
            onChange={handleChange}
          />
          <input
            id="description"
            type="text"
            placeholder="Your feedback"
            value={testimonial.description}
            onChange={handleChange}
          />
        </form>
      </div>
    </StaticPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getFeedbacks: (params) => dispatch(getFeedbacksAction(params)),
  onCreate: (params) => dispatch(addFeedbackAction(params)),
  onEdit: (id, data) => dispatch(editFeedbackAction(id, data)),
  successNotification: (message) =>
    dispatch(successNotificationAction(message)),
  errorNotification: (message) => dispatch(errorNotificationAction(message)),
});

const mapStateToProps = ({ admin }) => {
  const data = {
    feedbacks: admin.feedbacks,
  };
  return data;
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
