import { ADD } from '../actions';

const INITIAL_STATE = {
  count: 0
};

export default function counter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.val
      }
    default:
      return state;
  }
}