import { merge } from 'lodash';
import {
  OPEN_UPLOAD_MODAL,
  CLOSE_UPLOAD_MODAL,
  START_TOUR,
  END_TOUR
} from '../actions/modal_actions';

const _defaultState = {
  upload: false,
  tour: false,
  greeting: true
};

export default ( state = _defaultState, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case OPEN_UPLOAD_MODAL:
    return merge( {}, state, { upload: true } )
  case CLOSE_UPLOAD_MODAL:
    return merge( {}, state, { upload: false } )
  case START_TOUR:
    return merge( {}, state, { tour: true } )
  case END_TOUR:
    return merge( {}, state, { tour: false } )
  default:
    return state;
  }
};
