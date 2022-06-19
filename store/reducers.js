import { combineReducers } from 'redux';

import auth from './auth/authSlice';
import webSetting from './user/webSettingSlice';
import productLiked from './user/productLiked';
import webData from './webData/webDataSlice';
import compare from "./compare/compareSlice";
import recentlyViewedProducts from "./recentlyViewedProducts/recentlyViewedProductsSlice";

const reducers = combineReducers({
    auth,
    webSetting,
    webData,
    compare,
    recentlyViewedProducts,
    productLiked
});

export default reducers;