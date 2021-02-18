import typeToReducer from 'type-to-reducer'
import {
  CREATE_CATEGORY,
  GET_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  GET_CATEGORIES,
  GET_LESSON,
  ADD_LESSON,
  DELETE_LESSON,
  EDIT_LESSON,
  GET_USERS,
  DELETE_USER
} from './constants';
import { sortTopicsAlphabetically, sortTopics, getLetters } from '../Dashboard/helpers';

export const initialState = {
  inProcess: false,
  category: null,
  courses: null,
  lesson: null,
  users: null,
  pages: null,
  errors: [],
  letters: [],
}

export default typeToReducer(
  {
    [CREATE_CATEGORY]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          category: action.payload.data.data.category,
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
    [GET_CATEGORY]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          category: action.payload.data.data.category,
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
    [DELETE_CATEGORY]: {
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
          errors: action.payload.response.data.errors,
          inProcess: false
        }
      }
    },
    [EDIT_CATEGORY]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          category: action.payload.data.data.category,
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
    [GET_CATEGORIES]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        const { payload } = action || {};
        const { data: { data } } = payload || {};
        const { categories } = data || {};
        const courses = sortTopicsAlphabetically(sortTopics(categories));
        const letters = getLetters(courses);
        return {
          ...state,
          courses,
          inProcess: false,
          letters,
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
    [GET_LESSON]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          lesson: action.payload.data.data.lesson,
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
    [ADD_LESSON]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
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
          errors: action.payload.response.data.data.errors,
          inProcess: false
        }
      }
    },
    [DELETE_LESSON]: {
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
          errors: action.payload.response.data.errors,
          inProcess: false
        }
      }
    },
    [EDIT_LESSON]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
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
          errors: action.payload.response.data.data.errors,
          inProcess: false
        }
      }
    },
    [GET_USERS]: {
      START: (state) => {
        return {
          ...state,
          inProcess: true
        }
      },
      SUCCESS: (state, action) => {
        return {
          ...state,
          users: action.payload.data.data.user,
          pages: action.payload.data.data.total_pages,
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
    [DELETE_USER]: {
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
          errors: action.payload.response.data.errors,
          inProcess: false
        }
      }
    },
  },
  initialState
)
