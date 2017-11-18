import React from 'react';
import ReactDOM from 'react-dom';
// import { signUp, logIn, logOut } from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store }/>, root);
});
// window.signUp = signUp;
// window.logIn = logIn;
// window.logOut = logOut;
// window.store = store;
