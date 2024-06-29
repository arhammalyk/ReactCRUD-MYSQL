import { IS_MODAL } from "./modalTypes";

export const isModal = (value) => {
  return {
    type: IS_MODAL,
    payload: value,
  };
};
