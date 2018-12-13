import { ALERT_SUCCESS, ALERT_CLEAR, ALERT_ERROR } from './types';

export const alertSuccess = (message) => {
  return {
     type: ALERT_SUCCESS,
     message
   };
};

export const alertError = (message) => {
  return {
    type:ALERT_ERROR,
    message
  }
};

export const alertClear = () => {
  return {
    type: ALERT_CLEAR
  }
};
