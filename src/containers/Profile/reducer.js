import typeToReducer from 'type-to-reducer'
import { UPDATE_USER } from './constants';

export const initialState = {
  inProcess: false,
  user: null,
  errors: []
}

export default typeToReducer(
  {
    [UPDATE_USER]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          user: action.payload.data.data.user,
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
  },
  initialState
)
