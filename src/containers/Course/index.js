import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import saveAs from "save-as";
import { ROUTE_TO_PAYMENTS_INFO } from "../../constants/routes";
import { getCourseAction } from "../Courses/actions";
import { getCertAction } from "./actions";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";
import CircularProgress from "@material-ui/core/CircularProgress";
import download_icon from "../../assets/images/dest/get.svg";

const Course = ({
  course,
  inProcess,
  match,
  getCourse,
  notSubscribed,
  history,
  user,
  getCert,
}) => {
  useEffect(() => {
    // ComponentDidMount
    const { params } = match;
    if (!course || (course && course.id !== params.id)) getCourse(params.id);
  }, []);

  useEffect(() => {
    const { params } = match;
    const user_subscriptions =
      user && user.subscription_ids ? user.subscription_ids : [];
    const isSubscribedCategory = user_subscriptions.includes(
      parseInt(params.id, 10)
    );
    if (notSubscribed && !isSubscribedCategory)
      history.push(ROUTE_TO_PAYMENTS_INFO);
  }, [notSubscribed, user]);

  const getCertHandler = (id) => {
    getCert(id).then((res) => {
      if (res.value && res.value.data) {
        let blob = new Blob([res.value.data], { type: "application/pdf" });
        saveAs(blob, "cert.pdf");
      }
    });
  };

  return (
    <StaticPage pageClass="profile" headerData={headerData.autorized}>
      <section
        className="sec-category-content"
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="course-progress-wrapper">
            <div className="course-progress-item">
              <span className="course-progress-header">
                Progress of passage lesson
              </span>
              <p className="course-progress-info">{course.progress || 0}%</p>
            </div>
            <div className="course-progress-item">
              <span className="course-progress-header">
                Overall performance
              </span>
              <p className="course-progress-info">{`${
                course.cpd_points_count || 0
              }/${course.tutorials_count * 10 || 0}`}</p>
            </div>
            <div className="course-progress-item">
              <span className="course-progress-header">Passed lessons</span>
              <p className="course-progress-info">{`${
                course.completed_count || 0
              }/${course.tutorials_count || 0}`}</p>
            </div>
            <div
              className="course-progress-item"
              onClick={() => getCertHandler(course.id)}
            >
              <span className="course-progress-header">
                Certificate:{" "}
                <strong>
                  {course.completed_count != course.tutorials_count
                    ? "Unavaialble"
                    : "Available"}
                </strong>
              </span>
              <p className="course-progress-info download_icon">
                <img src={download_icon} />
              </p>
            </div>
          </div>
          <h2 className="course-progress-title">{course.title}</h2>
          <div className="course-progress-lessons">
            <div className="course-progress-lessons-table-header">
              <span className="course-progress-lessons-table-title">
                Title of the Module
              </span>
              <span className="course-progress-lessons-table-result">
                Results
              </span>
            </div>
            {course.tutorials && !inProcess ? (
              course.tutorials.map((tutorial, index) => (
                <Link
                  key={tutorial.id}
                  to={`lesson/${tutorial.id}`}
                  className="course-progress-lessons-wrapper"
                >
                  <div className="course-progress-lessons-title-wrapper">
                    <span className="course-progress-lessons-header">{`Lesson ${
                      index + 1
                    }`}</span>
                    <span className="course-progress-lessons-title">
                      {tutorial.title}
                    </span>
                  </div>
                  <span className="course-progress-lessons-result">{`${tutorial.cpd_points}/10`}</span>
                </Link>
              ))
            ) : (
              <div className="progress row justify-center">
                <CircularProgress />
              </div>
            )}
          </div>
        </div>
      </section>
    </StaticPage>
  );
};

const mapStateToProps = ({
  auth: { user },
  course: { course, notSubscribed, inProcess },
}) => ({
  user,
  course,
  notSubscribed,
});

const mapDispatchToProps = (dispatch) => ({
  getCourse: (id) => dispatch(getCourseAction(id)),
  getCert: (id) => dispatch(getCertAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
