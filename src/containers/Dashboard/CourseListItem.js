import React from 'react';
import {Link} from 'react-router-dom';

const CourseListItem = ({course, user}) => (
  <div className="topic-item">
    <Link to={user ? `/courses/${course.id}` : '/'}>{course.title}</Link>
  </div>
);

export default CourseListItem;