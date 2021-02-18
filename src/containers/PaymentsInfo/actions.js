import { createAction } from 'redux-actions';

import {SUBSCRIBE, GET_SUBSCRIPTIONS} from './constants';
import {subscribeApi, getSubscriptionsApi} from './api';

export const subscribeAction = createAction(SUBSCRIBE, async (data) => subscribeApi(data));
export const getSubscriptionsAction = createAction(GET_SUBSCRIPTIONS, async () => getSubscriptionsApi());