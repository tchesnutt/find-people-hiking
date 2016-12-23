import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import PathReducer from './path_reducer';


const RootReducer = combineReducers({
  path: PathReducer,
  modals: ModalReducer
});

export default RootReducer;
