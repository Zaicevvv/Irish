import { createAction } from 'redux-actions';

import {GET_COURSE, ADD_TO_MY_COURSE} from './constants';
import {getCourse, addToMyCourseApi} from './api';

export const getCourseAction = createAction(GET_COURSE, async id => getCourse(id));
export const addToMyCourseAction = createAction(ADD_TO_MY_COURSE, async id => addToMyCourseApi(id));