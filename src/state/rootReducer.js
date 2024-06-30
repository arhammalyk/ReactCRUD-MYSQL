import { combineReducers } from "redux";
import isSigninReducer from "./user/userReducer";
import userTasksReducer from "./task/taskReducers";
import modalReducer from "./modal/modalReducers";
import alertReducer from "./alert/alertReducer";

const reducers = combineReducers({
  isSignin: isSigninReducer,
  tasks: userTasksReducer,
  modal: modalReducer,
  alert: alertReducer,
});
export default reducers;
