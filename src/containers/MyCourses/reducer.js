import typeToReducer from 'type-to-reducer';
import { GET_COURSE, GET_MY_COURSES } from './constants';
import { sortTopicsAlphabetically, sortTopics, getLetters } from './helpers';

export const initialState = {
  inProcess: false,
  course: {},
  courses: [],
  errors: [],
  letters: [],
  notSubscribed: false,
  coursesArray: [],
};

export default typeToReducer(
  {
    [GET_COURSE]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        const {payload} = action || {};
        const {data: {data}} = payload || {};
        const {category} = data || {};
        return {
          ...state,
          course: category,
          inProcess: false,
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.response.data.data.errors,
          inProcess: false
        }
      }
    },
    [GET_MY_COURSES]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true,
          notSubscribed: false,
        }
      },
      SUCCESS: (state, action) => {
        const {payload} = action || {};
        const {data: {data}} = payload || {};
        const {categories} = data || {};
        const courses = sortTopicsAlphabetically(sortTopics(categories));
        const letters = getLetters(courses); 
        return {
          ...state,
          courses,
          inProcess: false,
          letters,
          notSubscribed: false,
          coursesArray: categories,
        }
      },
      FAIL: (state, action) => {
        const {response} = action.payload || {};
        const {data: {data}} = response || {};
        const {error_messages, errors} = data || {};
        const notSubscribed = error_messages && error_messages === 'Course not purcased';
        return {
          ...state,
          errors,
          inProcess: false,
          notSubscribed,
        }
      }
    },
  },
  initialState,
);