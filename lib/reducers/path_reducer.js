import { merge } from 'lodash';
import { RECEIVE_PATH } from '../action/path_actions';

const _defaultState = {
  coordinates: false
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PATH:
      return merge({}, state, action.path))
    default:
      return state;
  }
};
