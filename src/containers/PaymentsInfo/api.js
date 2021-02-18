import api from '../../utils/api';

export const subscribeApi = data => api.post(`/subscriptions`, data);
export const getSubscriptionsApi = () => api.get('/subscriptions');