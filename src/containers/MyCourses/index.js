import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMyCoursesAction} from './actions';
import { getCurrentUserAction } from '../Auth/actions';
import {ROUTE_TO_PAYMENTS_INFO} from '../../constants/routes';
import CoursesComponent from '../../components/Courses/';

class Courses extends Component {
  state = {
    course: {},
  };

  componentDidMount() {
    const { getMyCourses, getCurrentUser } = this.props;
    getMyCourses();
    if (getCurrentUser)
      setTimeout(() => getCurrentUser(), 1000);
  }

  componentDidUpdate(prevProps) {
    const {notSubscribed, history} = this.props;
    if(notSubscribed && prevProps.notSubscribed !== notSubscribed) {
      history.push(ROUTE_TO_PAYMENTS_INFO);
    }
  }

  getCourse = course_id => {
    const {coursesArray} = this.props;
    const course = coursesArray.filter(courseItem => courseItem.id === course_id)[0];
    this.setState({course});
  }

  render() {
    const {courses, letters, user} = this.props;
    const {course} = this.state;
    return (
      <CoursesComponent
        courses={courses}
        letters={letters}
        user={user}
        course={course}
        getCourse={this.getCourse}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMyCourses: () => dispatch(getMyCoursesAction()),
  getCurrentUser: () => dispatch(getCurrentUserAction())
})

const mapStateToProps = ({myCourses: {courses, letters, notSubscribed, coursesArray}, auth: {user}}) => ({
  courses,
  letters,
  user,
  notSubscribed,
  coursesArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
