import {
  AUTH_USER,
  LOGOUT_USER,
  CHANGE_INPUT_PASSWORD_AUTH,
  CHANGE_INPUT_EMAIL_AUTH,
} from "./actionTypes";

export const auth = (email, password) => {
  return {
    type: AUTH_USER,
    email,
    password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const changeEmailInputAuth = (email) => {
  return {
    type: CHANGE_INPUT_EMAIL_AUTH,
    email: email,
  };
};

export const changePasswordInputAuth = (password) => {
  return {
    type: CHANGE_INPUT_PASSWORD_AUTH,
    password: password,
  };
};
