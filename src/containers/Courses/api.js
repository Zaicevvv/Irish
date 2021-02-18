import api from '../../utils/api';

export const getCourse = id => api.get(`/categories/${id}`);
export const addToMyCourseApi = id => api.post('/users/add_category', { id });