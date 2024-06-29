import { IS_MODAL } from "./modalTypes";

const initialState = {
  open: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MODAL:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
