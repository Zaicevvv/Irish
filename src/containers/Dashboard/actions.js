import { createAction } from 'redux-actions';

import {GET_COURSES} from './constants';
import {getCourses} from './api';

export const getCoursesAction = createAction(GET_COURSES, async () => getCourses());