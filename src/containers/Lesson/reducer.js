import typeToReducer from 'type-to-reducer'
import { GET_LESSON, SUBMIT_ANSWERS } from './constants';

export const initialState = {
  inProcess: false,
  lesson: {},
  errors: [],
  quizResult: null,
}

export default typeToReducer(
  {
    [GET_LESSON]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true,
          lesson: {}
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          lesson: action.payload.data.data.tutorial,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.response.data.errors,
          inProcess: false
        }
      }
    },
    [SUBMIT_ANSWERS]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true,
          quizResult: null,
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          quizResult: action.payload.data.data.quiz_result,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        const {response} = action.payload || {};
        const {data: {data}} = response || {};
        const {errors, error_messages, quiz_result} = data || {};
        return {
          ...state,
          quizResult: quiz_result || null,
          errors: errors || error_messages,
          inProcess: false
        }
      }
    },
  },
  initialState
)
