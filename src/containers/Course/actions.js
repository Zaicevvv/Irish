import { createAction } from 'redux-actions';

import { GET_CERT } from './constants';
import { getCert } from './api';

export const getCertAction = createAction(GET_CERT, async id => getCert(id));
