import typeToReducer from 'type-to-reducer'
import { GET_CATEGORIES } from './constants';

export const initialState = {
  inProcess: false,
  courses: null,
  errors: []
}

export default typeToReducer(
  {
    [GET_CATEGORIES]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          courses: action.payload.data.data.categories,
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
    }
  },
  initialState
)
