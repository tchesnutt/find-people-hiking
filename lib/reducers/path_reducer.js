import { merge } from 'lodash';
import { ADD_PATH, UPDATE_PATH, ADD_LINE_AND_DIST } from '../actions/path_actions';

const _defaultState = {
  coordinates: false,
  line: [{}, {}],
  dist: false
};

export default ( state = _defaultState, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case ADD_PATH:
    return merge( {}, state, {coordinates: action.path} )
  case UPDATE_PATH:
    return merge(  {}, state, {coordinates: action.path} )
  case ADD_LINE_AND_DIST:
    return merge( {}, state, {line: action.obj.line, dist: action.obj.dist} )
  default:
    return state;
  }
};
