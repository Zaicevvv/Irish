import { createAction } from 'redux-actions'

import { GET_CURRENT_USER, LOGIN, CREATE_USER, LOGOUT, PASSWORD_RECOVERY, PASSWORD_CHANGE } from './constants'
import { createUserApi, loginApi, getCurrentUserApi, logoutApi, passwordRecovery, passwordChange } from './api'

export const loginAction = createAction(LOGIN, async (data) => loginApi(data))
export const getCurrentUserAction = createAction(GET_CURRENT_USER, async () => getCurrentUserApi())
export const createUserAction = createAction(CREATE_USER, async (data) => createUserApi(data))
export const logoutAction = createAction(LOGOUT, async () => logoutApi())

export const forgotPasswordAction = createAction(PASSWORD_RECOVERY, async (data) => passwordRecovery(data))
export const changePasswordAction = createAction(PASSWORD_CHANGE, async (data) => passwordChange(data))
