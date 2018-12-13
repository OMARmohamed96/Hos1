import { GET_USERS, EDIT_USER, REMOVE_USER, PROMOTE_USER,
         USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: user ? { user } : {},
  loggedIn: user ? true : false
};
console.log(initialState);

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        user: action.user
      };
    case USER_LOGIN_SUCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state
      };
    case USER_LOGOUT:
    return {
      users: state.users,
      user: {},
      loggedIn: false
    };
    default:
      return state;
  }
}
