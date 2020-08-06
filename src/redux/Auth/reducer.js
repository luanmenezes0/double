import {
  AUTH_USER,
  LOGOUT_USER,
  CHANGE_INPUT_PASSWORD_AUTH,
  CHANGE_INPUT_EMAIL_AUTH,
} from "./actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  isAuth: false,
  email: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return updateObject(state, { isAuth: true, email: action.email });

    case LOGOUT_USER:
      return updateObject(state, { isAuth: false });

    case CHANGE_INPUT_EMAIL_AUTH:
      return updateObject(state, { email: action.email });

    case CHANGE_INPUT_PASSWORD_AUTH:
      return updateObject(state, { password: action.password });

    default:
      return state;
  }
};

export default reducer;
