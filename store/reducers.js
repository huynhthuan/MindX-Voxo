import { combineReducers } from "redux";
import compare from "./compare/compareSlice";
import auth from "./auth/authSlice";
import webSetting from "./user/webSettingSlice";

const reducers = combineReducers({
   auth,
   webSetting,
   compare,
});

export default reducers;
