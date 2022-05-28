import { combineReducers } from "redux";
import compare from "./compare/compareSlice";
import recentlyViewedProducts from "./recentlyViewedProducts/recentlyViewedProductsSlice";
import auth from "./auth/authSlice";
import webSetting from "./user/webSettingSlice";

const reducers = combineReducers({
   auth,
   webSetting,
   compare,
   recentlyViewedProducts,
});

export default reducers;
