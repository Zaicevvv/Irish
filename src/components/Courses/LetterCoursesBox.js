import React from 'react';

const LetterCoursesBox = ({ letter, courses, onCourseClick, course }) => (
  <div className={
    `letter-box ${
      course.title && course.title.charAt(0).toUpperCase() === letter ? 'select' : '' }`}>
    <div className="letter-container">
      <p>{ letter }</p>
    </div>
    <div className="cat-wrapper">
      { courses.map(courseItem =>
        <div
          key={ courseItem.id }
          className={`single-category ${ course && course.id === courseItem.id ? 'active' : '' }`}
          onClick={ () => onCourseClick(courseItem) }
        >
          <span>{ courseItem.title }</span>
        </div>
      )}
    </div>
  </div>
);

export default LetterCoursesBox;