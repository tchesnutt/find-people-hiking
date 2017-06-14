import { connect } from 'react-redux';
import ErrorModal from './error';
import { killError } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  show: state.modals.error.show,
  message: state.modals.error.message
});

const mapDispatchToProps = (dispatch) => ({
  killError: () => dispatch(killError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
