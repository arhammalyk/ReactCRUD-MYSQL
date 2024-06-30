import { SHOW_ALERT } from "./alertTypes";

export const showAlert = (message, type, visible) => {
  return {
    type: SHOW_ALERT,
    payload: {
      message,
      type,
      visible,
    },
  };
};
