import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFeedbackAction,
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
  getFeedback,
  onCreate,
  onEdit,
  feedback,
  errorNotification,
  successNotification,
  match,
}) => {
  const [testimonial, setTestimonial] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    if (match.params.id) {
      getFeedback(match.params.id);
    }
  }, []);

  useEffect(() => {
    if (match.params.id && match.params.id != 'new') {
      setTestimonial(feedback);
    } else {
      setTestimonial({ title: "", description: "" });
    }
  }, [feedback, match.params.id]);

  const handleChange = (e) =>
    setTestimonial({ ...testimonial, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (match.params.id && match.params.id != 'new') {
      onEdit(match.params.id, { testimonial: testimonial }).then((res) => {
        if (res.value.status == 200) {
          successNotification('Saved!');
          setTimeout(() => { window.location.replace(ROUTE_TO_TESTIMONIALS) }, 500)
        }
      });
    } else {
      onCreate({ testimonial: testimonial }).then((res) => {
        if (res.value.status == 200) {
          successNotification('Saved!');
          setTimeout(() => { window.location.replace(ROUTE_TO_TESTIMONIALS) }, 500)
        }
      });
    }
  }

  return (
    <StaticPage pageClass="feedbacks_single" headerData={headerData.admin}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="actionButtons">
            <Link to={ROUTE_TO_TESTIMONIALS} className="alertColor">
              Cancel
            </Link>
            <button type="submit">
              SAVE CHANGES
            </button>
          </div>
          <div className="feedbacks_single_container">
            <h3 className="courseFormName">
              {match.params.id && match.params.id != 'new'
                ? "Edit testimonial"
                : "Create testimonial"}
            </h3>
            <input
              id="title"
              type="text"
              placeholder="Your name"
              required
              value={testimonial?.title}
              className="input_dark w-full"
              onChange={handleChange}
            />
            <textarea
              id="description"
              type="text"
              required
              placeholder="Your feedback"
              value={testimonial?.description}
              className="input_dark w-full"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </StaticPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getFeedback: (id) => dispatch(getFeedbackAction(id)),
  onCreate: (params) => dispatch(addFeedbackAction(params)),
  onEdit: (id, data) => dispatch(editFeedbackAction(id, data)),
  successNotification: (message) =>
    dispatch(successNotificationAction(message)),
  errorNotification: (message) => dispatch(errorNotificationAction(message)),
});

const mapStateToProps = ({ admin }) => {
  const data = {
    feedback: admin.feedback,
  };
  return data;
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
