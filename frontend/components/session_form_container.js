import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import {logIn, signUp } from '../actions/session_actions'
const mapStateToProps = (state, ownProps) => {
  console.log("STATE: ", state)
  console.log("ownProps: ", ownProps);
  let loggedIn;
  let formType;
  state.session.currentUser === null ? loggedIn = false : loggedIn = true;
  ownProps.location.pathname === "/signup" ? formType = 'signup' : formType = 'login'
  return ({
    loggedIn: loggedIn,
    errors: state.errors.session,
    formType: formType
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  ownProps.location.pathname === "/signup" ? action = signUp : action = logIn;  
  // console.log("The action is: ", action)
  return ({
    processForm: (user) => dispatch(action(user))
  });
}

export default withRouter(connect(mapStateToProps, 
  mapDispatchToProps)(SessionForm));