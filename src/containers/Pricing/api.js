import api from '../../utils/api'

export const sendMessageApi = (data) => api.post('/contact_us', data)
