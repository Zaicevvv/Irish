import { createAction } from 'redux-actions'

import { UPDATE_USER } from './constants'
import { updateUserApi } from './api'

export const updateUserAction = createAction(UPDATE_USER, async (data) => updateUserApi(data))

