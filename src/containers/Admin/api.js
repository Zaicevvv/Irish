import api from '../../utils/api'

export const createCategoryApi = (data) => api.post('/categories', data)
export const getCategoryApi = (id) => api.get(`/categories/${id}?admin=true`)
export const deleteCategoryApi = (id) => api.delete(`/categories/${id}`)
export const editCategoryApi = (id, data) => api.put(`/categories/${id}`, data)
export const getCategoriesApi = () => api.get('/categories/?admin=true')
export const getLessonApi = (id) => api.get(`/tutorials/${id}`)
export const addLessonApi = (data) => api.post('/tutorials', data)
export const deleteLessonApi = (id) => api.delete(`/tutorials/${id}`)
export const editLessonApi = (id, data) => api.put(`/tutorials/${id}`, data)
export const getUsersApi = (params) => api.get('/users', { params })
export const deleteUserApi = (id) => api.delete(`/users/${id}`)
