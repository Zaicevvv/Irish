import { createAction } from 'redux-actions';

import {GET_COURSE, GET_MY_COURSES} from './constants';
import {getCourse, getMyCoursesApi} from './api';

export const getCourseAction = createAction(GET_COURSE, async id => getCourse(id));
export const getMyCoursesAction = createAction(GET_MY_COURSES, async () => getMyCoursesApi());