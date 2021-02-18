import typeToReducer from 'type-to-reducer';
import { GET_COURSE, ADD_TO_MY_COURSE } from './constants';

export const initialState = {
  inProcess: false,
  course: [],
  errors: [],
  notSubscribed: false,
};

export default typeToReducer(
  {
    [GET_COURSE]: {
      START: (state) => {
        return {
          ...state,
          course: [],
          inProcess: true,
          notSubscribed: false,
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
          notSubscribed: false,
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
    [ADD_TO_MY_COURSE]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true,
          notSubscribed: false,
        }
      },
      SUCCESS: (state) => {
        return {
          ...state,
          inProcess: false,
          notSubscribed: false,
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