import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'


import authReducer from './containers/Auth/reducer';
import adminReducer from './containers/Admin/reducer';
import dashboard from './containers/Dashboard/reducer';
import course from './containers/Courses/reducer';
import lesson from './containers/Lesson/reducer';
import subscriptions from './containers/PaymentsInfo/reducer';
import myCourses from './containers/MyCourses/reducer';
import profileReducer from './containers/Profile/reducer';
import landingReducer from './containers/Landing/reducer';

export default combineReducers({
  auth: authReducer,
  admin: adminReducer,
  dashboard,
  course,
  notifications,
  lesson,
  subscriptions,
  myCourses,
  profileReducer,
  landing: landingReducer
})
