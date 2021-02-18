import { createAction } from 'redux-actions'

import { SEND_MESSAGE } from './constants'
import { sendMessageApi } from './api'

export const sendMessageAction = createAction(SEND_MESSAGE, async (data) => sendMessageApi(data))
