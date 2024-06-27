import { IS_SIGNIN } from "./userTypes";

const initialState = {
  value: false,
};

const isSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SIGNIN:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export default isSigninReducer;
