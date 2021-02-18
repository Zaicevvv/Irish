import { createAction } from 'redux-actions';

import {GET_LESSON, SUBMIT_ANSWERS} from './constants';
import {getLessonApi, submitAnswersApi} from './api';

export const getLessonAction = createAction(GET_LESSON, async (id) => getLessonApi(id))
export const submitAnswersAction = createAction(SUBMIT_ANSWERS, async (data) => submitAnswersApi(data));