import { AUTH_USER, LOGOUT_USER } from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  isAuth: false,
  email: '',
  password: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case AUTH_USER:
      return updateObject(state, { isAuth: true, email: action.email, password: action.password })

    case LOGOUT_USER:
      return updateObject(state, { isAuth: false })

    default:
      return state
  }
}

export default reducer;