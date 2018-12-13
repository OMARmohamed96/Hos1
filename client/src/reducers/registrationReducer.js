import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../actions/types';

export default function registration(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { registering: true }; // Flag to display the loading sign
    case USER_REGISTER_SUCCESS:
      return {};
    case USER_REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
