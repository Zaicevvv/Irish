import typeToReducer from 'type-to-reducer';
import { SUBSCRIBE, GET_SUBSCRIPTIONS } from './constants';

export const initialState = {
  inProcess: false,
  errors: [],
  transactions: [],
  subscribed: false,
};

export default typeToReducer(
  {
    [SUBSCRIBE]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          inProcess: false,
          subscribed: true,
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
    [GET_SUBSCRIPTIONS]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true,
          subscribed: false,
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          inProcess: false,
          transactions: action.payload.data.data.transctions,
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