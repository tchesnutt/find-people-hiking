import { merge } from 'lodash';
import {
  OPEN_UPLOAD_MODAL,
  CLOSE_UPLOAD_MODAL
} from '../actions/modal_actions';

const _defaultState = {
  upload: false
};

export default ( state = _defaultState, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case OPEN_UPLOAD_MODAL:
    return merge( {}, state, { upload: true } )
  case CLOSE_UPLOAD_MODAL:
    return merge( {}, state, { upload: false } )
  default:
    return state;
  }
};
