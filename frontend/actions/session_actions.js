export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch => {
  return APIUtil.signUp(user)
    .then(
      response => dispatch(receiveCurrentUser(response)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logIn = user => dispatch => {
  return APIUtil.logIn(user)
    .then(
      response => dispatch(receiveCurrentUser(response)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logOut = () => dispatch => {
  return APIUtil.logOut()
    .then(
      response => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors))
  );
};
