import React from "react";
import { Link } from "react-router-dom";
import { routeToCourses } from "../../constants/routes";

const CourseListItem = ({ course }) => (
  <div className="topic-item">
    <Link to={routeToCourses(course.id)}>{course.title}</Link>
  </div>
);

export default CourseListItem;
