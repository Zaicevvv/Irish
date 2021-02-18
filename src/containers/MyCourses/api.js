import api from '../../utils/api';

export const getCourse = id => api.get(`/categories/${id}`);
export const getMyCoursesApi = () => api.get('/users/categories');