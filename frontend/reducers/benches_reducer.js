import { RECEIVE_BENCHES } from '../actions/bench_actions'
import merge from 'lodash/merge'
export const benchesReducer = (oldState = {bounds: []}, action) =>  {
  Object.freeze(oldState)
  let newState;
  switch(action.type) {
    case RECEIVE_BENCHES:
      // newState = merge({}, oldState, action.benches)
      return action.benches;
    default:
      return oldState;
  }
}