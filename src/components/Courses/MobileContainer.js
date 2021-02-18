import React from 'react';
import { Link } from 'react-router-dom';

const MobileContainer = ({ courses, course, user, goToCourse }) => (
  <div className="results-wrapper-small">
    { courses && courses.length > 0 && courses.map(courseItem =>
      <div className="card" key={ courseItem.id }>
        <p className="category--name">{ courseItem.title }</p>
        <div className="category--items">
          { courseItem.tutorials.length > 0 && courseItem.tutorials.map(tutorial =>
            <Link
              key={ tutorial.id }
              to={ user && user.role !== 'admin' ?
                `lesson/${ tutorial.id }` :
                `lesson_edit/${ tutorial.id }`
              }
              className='cat-item'
            >
              { tutorial }
            </Link>
          )}
      </div>
    </div>
    )}
    { course &&
      <div className="card">
        <p className="category--name">{ course.title }</p>
        <p className="cat-section">Description of this course</p>
        <p className="cat-description">{ course.description }</p>
        <p className="cat-section">Modules include:</p>
          {/* { user && user.role === 'admin' &&
              <div style={{ float: 'right' }}>
                <button className='btn btn-remove-cat' onClick={ onDeleteCategory }>
                  <img src={ DeletedIcon } alt="icon" />
                </button>
                <button className='btn btn-remove-cat' onClick={ onEditCategory }>
                  <img src={ EditIcon } alt="icon" />
                </button>
              </div>
          } */}
        <div className="category--items">
          { course.tutorials && course.tutorials.length > 0 && course.tutorials.map((tutorial, index) =>
            <span
              key={ index }
              className='cat-item'
            >
              { `Lesson ${index + 1}: ${tutorial}` }
            </span>
          )}
      </div>
      <Link
        to={`/course/${course.id}`}
        className='cat-btn-details'
        onClick={() => goToCourse(course)}
      >
        <span className='cat-btn-details-text'>GO TO COURSE</span>
      </Link>
    </div>
    }
  </div>
);

export default MobileContainer;