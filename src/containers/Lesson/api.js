import api from '../../utils/api';

export const getLessonApi = (id) => api.get(`/tutorials/${id}`);
export const submitAnswersApi = data => api.post(`/results`, data);