import { AUTH_USER, LOGOUT_USER } from './actionTypes';

export const auth = (email, password) => {
  return {
    type: AUTH_USER,
    email,
    password
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER,
  }
}