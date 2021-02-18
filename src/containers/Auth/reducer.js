import typeToReducer from 'type-to-reducer'
import { CREATE_USER, LOGIN, LOGOUT, GET_CURRENT_USER, PASSWORD_RECOVERY, PASSWORD_CHANGE } from './constants';

export const initialState = {
  inProcess: false,
  user: null,
  token: null,
  errors: []
}

export default typeToReducer(
  {
    [CREATE_USER]: {
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
          token: action.payload.data.data.token,
          inProcess: false
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
    [LOGIN]: {
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
          token: action.payload.data.data.token,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.response.data.data,
          inProcess: false
        }
      }
    },
    [LOGOUT]: {
      START: (state, action) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          user: null,
          token: null,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.errors,
          inProcess: false
        }
      }
    },
    [GET_CURRENT_USER]: {
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
          errors: action.payload.errors,
          inProcess: false
        }
      }
    },
    [PASSWORD_RECOVERY]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.response.data,
          inProcess: false
        }
      }
    },
    [PASSWORD_CHANGE]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          inProcess: false
        }
      },
      FAIL: (state, action) => {
        return {
          ...state,
          errors: action.payload.response.data,
          inProcess: false
        }
      }
    },
  },
  initialState
)
