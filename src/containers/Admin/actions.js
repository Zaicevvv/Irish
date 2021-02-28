import { createAction } from "redux-actions";

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
  DELETE_USER,
  GET_FEEDBACKS,
  CREATE_FEEDBACK,
  EDIT_FEEDBACK,
  DELETE_FEEDBACK,
} from "./constants";
import {
  createCategoryApi,
  getCategoryApi,
  deleteCategoryApi,
  editCategoryApi,
  getCategoriesApi,
  getLessonApi,
  addLessonApi,
  deleteLessonApi,
  editLessonApi,
  getUsersApi,
  deleteUserApi,
  getFeedbacksApi,
  addFeedbackApi,
  editFeedbackApi,
  deleteFeedbackApi,
} from "./api";

export const createCategoryAction = createAction(
  CREATE_CATEGORY,
  async (data) => createCategoryApi(data)
);
export const getCategoryAction = createAction(GET_CATEGORY, async (id) =>
  getCategoryApi(id)
);
export const editCategoryAction = createAction(
  EDIT_CATEGORY,
  async (id, data) => editCategoryApi(id, data)
);
export const deleteCategoryAction = createAction(DELETE_CATEGORY, async (id) =>
  deleteCategoryApi(id)
);
export const getCategoriesAction = createAction(GET_CATEGORIES, async () =>
  getCategoriesApi()
);
export const getLessonAction = createAction(GET_LESSON, async (id) =>
  getLessonApi(id)
);
export const addLessonAction = createAction(ADD_LESSON, async (data) =>
  addLessonApi(data)
);
export const deleteLessonAction = createAction(DELETE_LESSON, async (id) =>
  deleteLessonApi(id)
);
export const editLessonAction = createAction(EDIT_LESSON, async (id, data) =>
  editLessonApi(id, data)
);
export const getUsersAction = createAction(GET_USERS, async (params) =>
  getUsersApi(params)
);
export const deleteUserAction = createAction(DELETE_USER, async (id) =>
  deleteUserApi(id)
);
export const getFeedbacksAction = createAction(GET_FEEDBACKS, async () =>
  getFeedbacksApi()
);
export const addFeedbackAction = createAction(CREATE_FEEDBACK, async () =>
  addFeedbackApi()
);
export const editFeedbackAction = createAction(EDIT_FEEDBACK, async () =>
  editFeedbackApi()
);
export const deleteFeedbackAction = createAction(DELETE_FEEDBACK, async () =>
  deleteFeedbackApi()
);
