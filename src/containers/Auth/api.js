import api from '../../utils/api'

export const createUserApi = (data) => api.post('/users', data)
export const loginApi = (data) => api.post('/tokens', data)
export const logoutApi = () => api.delete('/tokens')
export const getCurrentUserApi = () => api.get('/users/me')
export const passwordRecovery = (data) => api.post('/passwords_recovery', data)
export const passwordChange = (data) => api.put('/passwords_recovery', data)
