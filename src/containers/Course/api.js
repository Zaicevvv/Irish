import api from '../../utils/api';

export const getCert = id => api.get(`/pdfs/${id}`);
