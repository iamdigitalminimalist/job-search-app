import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

export const reducer = (state: any, action: any) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values"
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: ""
    };
  }
  throw new Error(`no such action : ${action.type}`);
};
