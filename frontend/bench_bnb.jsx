import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, logIn, logOut } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';
import Root from './components/root';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  let store 
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchBenches = fetchBenches;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logIn = logIn;
  window.signUp = signUp;
  ReactDOM.render(<Root store={ store }/>, root);
});
// window.logOut = logOut;
// window.store = store;
