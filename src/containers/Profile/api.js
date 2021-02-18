import api from '../../utils/api'

export const updateUserApi = (data) => api.put('/users', data)
