import { combineReducers } from "redux";
import isSigninReducer from "./user/userReducer";

const reducers = combineReducers({
  isSignin: isSigninReducer,
});
export default reducers;
