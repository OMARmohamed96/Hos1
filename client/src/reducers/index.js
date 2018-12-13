import { combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  users: userReducer,
  products: productReducer,
  alert: alertReducer,
  registration: registrationReducer
});
