import { combineReducers } from 'redux';

import auth from './auth/authSlice';
import webSetting from './user/webSettingSlice';
import webData from './webData/webDataSlice';

const reducers = combineReducers({
    auth,
    webSetting,
    webData,
});

export default reducers;
