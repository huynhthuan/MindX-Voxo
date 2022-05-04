import { combineReducers } from 'redux';

import auth from './auth/authSlice';

const reducers = combineReducers({
    auth,
});

export default reducers;
