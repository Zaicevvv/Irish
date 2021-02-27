import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getToken } from "../../utils/tokenCRUD";
import {
  ROUTE_TO_ROOT,
  ROUTE_TO_REMOTE_LEARNING,
  ROUTE_TO_CREATE_ACCOUNT,
  ROUTE_TO_LOGIN,
  ROUTE_TO_PROFILE,
  ROUTE_TO_ADMIN_COURSES,
  ROUTE_TO_CREATE_COURSE,
  ROUTE_TO_COURSE_EDIT,
  ROUTE_TO_LESSON_EDIT,
  ROUTE_TO_DASHBOARD,
  ROUTE_TO_COURSES,
  ROUTE_TO_ADMIN_USERS,
  ROUTE_TO_COURSE,
  ROUTE_TO_LESSON,
  ROUTE_TO_PAYMENTS_INFO,
  ROUTE_TO_MY_COURSES,
  ROUTE_TO_SPONSORSHIP,
  ROUTE_TO_CONTACT,
  ROUTE_TO_PRICING,
  ROUTE_TO_ABOUT_US,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PASSWORD_CHANGE,
  ROUTE_TO_EDUCATORS,
  ROUTE_TO_TESTIMONIALS,
  ROUTE_TO_TESTIMONIAL,
} from "../../constants/routes.js";
import StrictlyPublicRoute from "../../components/StrictlyPublicRoute";
import PrivateRoute from "../../components/PrivateRoute";
import AdminRoute from "../../components/AdminRoute";
import { getCurrentUserAction } from "../Auth/actions";
import Landing from "../Landing";
import RemoteLearning from "../RemoteLearning";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgotPassword from "../Auth/ForgotPassword";
import ChangePassword from "../Auth/ChangePassword";
import Profile from "../Profile";
import PaymentsInfo from "../PaymentsInfo";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import Users from "../Admin/Users";
import Course from "../Course";
import Lesson from "../Lesson";
import MyCourses from "../MyCourses";
import AllCourses from "../Admin/AllCourses";
import CreateCourse from "../Admin/CreateCourse";
import EditCourse from "../Admin/EditCourse";
import EditLesson from "../Admin/EditLesson";
import { connect } from "react-redux";
import Sponsorship from "../Sponsorship";
import ContactUs from "../ContactUs";
import Pricing from "../Pricing";
import AboutUs from "../AboutUs";
import Educators from "../Educators";
import FeedbackList from "../Admin/Feedbacks";
import FeedbackForm from "../Admin/Feedbacks/components/FeedbackForm";

const App = (props) => {
  useEffect(() => {
    const userInSystem = getToken();
    if (userInSystem && !props.user) props.getCurrentUser();
  }, []);

  return (
    <Switch>
      <StrictlyPublicRoute exact path={ROUTE_TO_ROOT} component={Landing} />
      <StrictlyPublicRoute exact path={ROUTE_TO_LOGIN} component={Login} />
      <StrictlyPublicRoute
        exact
        path={ROUTE_TO_CREATE_ACCOUNT}
        component={Signup}
      />
      <StrictlyPublicRoute
        exact
        path={ROUTE_PASSWORD_RECOVERY}
        component={ForgotPassword}
      />
      <StrictlyPublicRoute
        exact
        path={ROUTE_PASSWORD_CHANGE}
        component={ChangePassword}
      />

      <PrivateRoute exact path={ROUTE_TO_PROFILE} component={Profile} />
      <PrivateRoute
        exact
        path={ROUTE_TO_PAYMENTS_INFO}
        component={PaymentsInfo}
      />
      <Route exact path={ROUTE_TO_REMOTE_LEARNING} component={RemoteLearning} />
      <Route exact path={ROUTE_TO_DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTE_TO_COURSES} component={Courses} />
      <PrivateRoute exact path={ROUTE_TO_COURSE} component={Course} />
      <PrivateRoute exact path={ROUTE_TO_LESSON} component={Lesson} />
      <PrivateRoute exact path={ROUTE_TO_MY_COURSES} component={MyCourses} />

      {/* ADMIN */}
      <AdminRoute exact path={ROUTE_TO_ADMIN_COURSES} component={AllCourses} />
      <AdminRoute
        exact
        path={ROUTE_TO_CREATE_COURSE}
        component={CreateCourse}
      />
      <AdminRoute exact path={ROUTE_TO_COURSE_EDIT} component={EditCourse} />
      <AdminRoute exact path={ROUTE_TO_LESSON_EDIT} component={EditLesson} />
      <AdminRoute exact path={ROUTE_TO_ADMIN_USERS} component={Users} />
      <AdminRoute exact path={ROUTE_TO_TESTIMONIALS} component={FeedbackList} />
      <AdminRoute exact path={ROUTE_TO_TESTIMONIAL} component={FeedbackForm} />

      <Route exact path={ROUTE_TO_SPONSORSHIP} component={Sponsorship} />
      <Route exact path={ROUTE_TO_CONTACT} component={ContactUs} />
      <Route exact path={ROUTE_TO_PRICING} component={Pricing} />
      <Route exact path={ROUTE_TO_ABOUT_US} component={AboutUs} />
      <Route exact path={ROUTE_TO_EDUCATORS} component={Educators} />

      <Redirect to={ROUTE_TO_ROOT} />
    </Switch>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUserAction()),
});

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
