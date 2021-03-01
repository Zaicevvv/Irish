import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StaticPage from "../../../components/StaticPage";
import headerData from "../../../constants/navData";
import FeedbackItem from "./components/FeedbackItem";
import {
  getFeedbacksAction,
  deleteFeedbackAction,
  addFeedbackAction,
  editFeedbackAction,
} from "../actions";
import {
  errorNotificationAction,
  successNotificationAction,
} from "../../Notifications/actions";
import { ROUTE_TO_TESTIMONIAL } from "../../../constants/routes";

const FeedbackList = ({
  getFeedbacks,
  onDelete,
  feedbacks,
  errorNotification,
  successNotification,
  location,
}) => {
  const [search, setSearch] = useState();
  const [popupShow, setPopupShow] = useState();

  useEffect(() => {
    getFeedbacks();
    setTimeout(()=>{console.log(feedbacks)},[2000])
  }, []);

  const handlerDelete = async (id) => {
    await onDelete(id)
        .then((res) => {
            if (res.value.status == 200) {
                successNotification('Testimonial was deleted.')
                getFeedbacks()
                setPopupShow()
            }
        })
        .catch((error) => {
            errorNotification(error)
        })
  };

  return (
    <StaticPage pageClass="feedbacks_list" headerData={headerData.admin}>
      <div className="container">
        <table className="feedbacks_table">
          {feedbacks
            && feedbacks.map((item, index) => {
                return (
                  <FeedbackItem
                    popupShow={popupShow}
                    setPopupShow={setPopupShow}
                    item={item}
                    index={index}
                    handlerDelete={handlerDelete}
                  />
                );
              })
            }
        </table>
      </div>
    </StaticPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getFeedbacks: (params) => dispatch(getFeedbacksAction(params)),
  onCreate: (params) => dispatch(addFeedbackAction(params)),
  onEdit: (id, data) => dispatch(editFeedbackAction(id, data)),
  onDelete: (id) => dispatch(deleteFeedbackAction(id)),
  successNotification: (message) => dispatch(successNotificationAction(message)),
  errorNotification: (message) => dispatch(errorNotificationAction(message)),
});

const mapStateToProps = ({ admin }) => {
  const data = {
    feedbacks: admin.feedbacks,
  };
  return data;
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
