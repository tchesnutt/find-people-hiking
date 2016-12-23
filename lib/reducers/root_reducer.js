import { combineReducers } from 'redux';
import PathReducer from './path_reducer';
import ModalReducer from './modal_reducer';


const RootReducer = combineReducers({
  path: PathReducer,
  modals: ModalReducer
});

export default RootReducer;
