import { SHOW_ALERT } from "./alertTypes";

const initialState = {
  visible: false,
  message: "",
  type: "",
};
const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visible: action.payload.visible,
      };
    default:
      return state;
  }
};
export default alertReducer;
