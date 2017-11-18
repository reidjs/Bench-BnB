import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import * as _ from 'lodash';

const defaultState = {
  currentUser: null
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = _.merge({}, state, { currentUser: action.currentUser });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
