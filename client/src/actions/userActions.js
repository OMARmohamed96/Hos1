import { USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGIN_FAILURE,
         USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE,
         USER_LOGOUT } from './types';
import { userService } from '../services';
import { alertSuccess, alertError } from './alertActions';
import { history } from '../helpers/history';

export const login = (username, password) => dispatch => {
  dispatch(request({ username }));
  userService.login(username, password)
      .then(
          user => {
              dispatch(success(user));
              history.push('/home');
              dispatch(alertSuccess(`Welcome ${user.username}!`));
          },
          error => {
              dispatch(failure(error.toString()));
              dispatch(alertError(error.toString()));
          }
      );
  function request(user) { return { type: USER_LOGIN_REQUEST, user } }
  function success(user) { return { type: USER_LOGIN_SUCESS, user } }
  function failure(error) { return { type: USER_LOGIN_FAILURE, error } }
}

export const logout = () => {
  userService.logout();
  return { type: USER_LOGOUT };
}

export const register = (user) => dispatch => {
  console.log(user);
  dispatch(request(user));
  userService.register(user)
      .then(
          user => {
              dispatch(success());
              history.push('/SignIn'); // redirect user to homepage after registration
              dispatch(alertSuccess('Registration successful'));
          },
          error => {
              dispatch(failure(error.toString()));
              dispatch(alertError(error.toString()));
          }
      );

  function request(user) { return { type: USER_REGISTER_REQUEST, user } }
  function success(user) { return { type: USER_REGISTER_SUCCESS, user } }
  function failure(error) { return { type: USER_REGISTER_FAILURE, error } }
}
