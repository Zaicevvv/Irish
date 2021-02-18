import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToMyCourseAction} from './actions';
import {ROUTE_TO_PAYMENTS_INFO} from '../../constants/routes';
import {getCoursesAction} from '../Dashboard/actions';
import CoursesComponent from '../../components/Courses/';
import history from '../../history'
import { routeToCourse, ROUTE_TO_MY_COURSES } from '../../constants/routes'
import { subscribeAction, getSubscriptionsAction } from '../PaymentsInfo/actions';

class Courses extends Component {
  state = {
    course: {},
  };

  componentDidMount() {
    const {getCourses} = this.props;
    getCourses();
  }

  componentDidUpdate(prevProps) {
    const {notSubscribed, history, coursesArray, match} = this.props;
    const {course} = this.state;
    if(notSubscribed && prevProps.notSubscribed !== notSubscribed) {
      history.push(ROUTE_TO_PAYMENTS_INFO);
    }
    if(coursesArray.length > 0 && coursesArray.length > prevProps.coursesArray.length || coursesArray.length > 0 && !course.id) {
      const selectedCourse = coursesArray.filter(courseItem => courseItem.id === Number(match.params.id))[0];
      this.setState({course: selectedCourse});
    }
  }

  getCourse = course_id => {
    const {coursesArray} = this.props;
    const course = coursesArray.filter(courseItem => courseItem.id === course_id)[0];
    this.setState({course});
  }

  goToCourse = course => {
    const {addToMyCourse} = this.props;
    addToMyCourse(course.id);
  }

  onToken = (e) => {
    const { subscribe } = this.props
    const data = {
      token: e.id,
      price_plan: 1
    };
    subscribe(data).then((res) => {
      console.log(res)
      setTimeout(() => {
        history.push(ROUTE_TO_MY_COURSES)
      }, 500)
    });
  };

  onTokenSingle = (e, id) => {
    const { subscribe, addToMyCourse } = this.props
    const data = {
      token: e.id,
      price_plan: 0,
      category_id: id
    };
    subscribe(data).then((res) => {
      console.log(res)
      if (res.value.status === 200) {
        setTimeout(() => {
          addToMyCourse(id).then(() => {
            history.push(routeToCourse(id))
          });
        }, 3000)
      }
    });
  };

  render() {
    const { courses, letters, user, inProcess, getCurrentUser } = this.props;
    const {course} = this.state;
    return (
      <CoursesComponent
        courses={courses}
        letters={letters}
        user={user}
        course={course}
        getCourse={this.getCourse}
        addToMyCourse={this.goToCourse}
        onToken={this.onToken}
        onTokenSingle={this.onTokenSingle}
        inProcess={inProcess}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCoursesAction()),
  addToMyCourse: id => dispatch(addToMyCourseAction(id)),
  subscribe: data => dispatch(subscribeAction(data))
})

const mapStateToProps = ({ dashboard: { courses, letters, coursesArray, inProcess }, auth: { user }, course: { course, notSubscribed } }) => ({
  courses,
  letters,
  user,
  course,
  notSubscribed,
  coursesArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
