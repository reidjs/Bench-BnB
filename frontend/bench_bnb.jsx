import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, logIn, logOut } from './actions/session_actions';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
