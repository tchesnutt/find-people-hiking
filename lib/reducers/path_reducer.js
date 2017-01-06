import { merge } from 'lodash';
import { ADD_PATH, UPDATE_PATH, ADD_LINE_AND_DIST } from '../actions/path_actions';

const _defaultState = {
  coordinates: false,
  line: [{}, { position: {lat: 32.0902, lng: -113.7129} }],
  dist: false
};

export default ( state = _defaultState, action ) => {
  console.log(state);
  console.log(action);
  Object.freeze( state );
  switch ( action.type ) {
  case ADD_PATH:
    console.log(action.path);
    return merge( {}, state, {coordinates: action.path} )
  case UPDATE_PATH:
    return merge(  {}, state, {coordinates: action.path} )
  case ADD_LINE_AND_DIST:
    return merge( {}, state, {line: action.obj.line, dist: action.obj.dist} )
  default:
    return state;
  }
};
