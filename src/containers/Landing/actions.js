import { createAction } from 'redux-actions'

import { GET_CATEGORIES } from './constants'
import { getCategoriesApi } from './api'

export const getCategoriesAction = createAction(GET_CATEGORIES, async () => getCategoriesApi())