import { merge } from 'lodash';
import { ADD_PATH } from '../actions/path_actions';

const _defaultState = {
  coordinates: false
};

export default ( state = _defaultState, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case ADD_PATH:
    return merge( {}, state, {coordinates: action.path} )
  default:
    return state;
  }
};
