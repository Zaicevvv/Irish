import typeToReducer from 'type-to-reducer';
import { GET_COURSES } from './constants';
import { sortTopicsAlphabetically, sortTopics, getLetters } from './helpers';

export const initialState = {
  inProcess: false,
  courses: null,
  errors: [],
  letters: [],
  coursesArray: [],
};

export default typeToReducer(
  {
    [GET_COURSES]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
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
          coursesArray: categories,
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
  },
  initialState,
);