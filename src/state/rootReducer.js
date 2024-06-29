import { combineReducers } from "redux";
import isSigninReducer from "./user/userReducer";
import userTasksReducer from "./task/taskReducers";
import modalReducer from "./modal/modalReducers";

const reducers = combineReducers({
  isSignin: isSigninReducer,
  tasks: userTasksReducer,
  modal: modalReducer,
});
export default reducers;
