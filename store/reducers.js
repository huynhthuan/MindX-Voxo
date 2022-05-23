import { combineReducers } from 'redux';

import auth from './auth/authSlice';
import webSetting from './user/webSettingSlice';

const reducers = combineReducers({
    auth,
    webSetting,
});

export default reducers;
