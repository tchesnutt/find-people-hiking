import { merge } from 'lodash';
import {
  OPEN_UPLOAD_MODAL,
  CLOSE_UPLOAD_MODAL,
  START_TOUR,
  END_TOUR,
  KILL_WELCOME,
  SHOW_ERROR,
  KILL_ERROR
} from '../actions/modal_actions';

const _defaultState = {
  upload: false,
  tour: false,
  welcome: true,
  error: {
    show: false,
    message: 'No errors to report sir!'
  }
};

export default ( state = _defaultState, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case OPEN_UPLOAD_MODAL:
    return merge( {}, state, { upload: true } );
  case CLOSE_UPLOAD_MODAL:
    return merge( {}, state, { upload: false } );
  case START_TOUR:
    return merge( {}, state, { tour: true } );
  case END_TOUR:
    return merge( {}, state, { tour: false } );
  case KILL_WELCOME:
    return merge( {}, state, { welcome: false } );
  case SHOW_ERROR:
    return merge( {}, state, { error: {show: true, message: action.message} } );
  case KILL_ERROR:
    return merge( {}, state, { error: {show: false} } );
  default:
    return state;
  }
};
