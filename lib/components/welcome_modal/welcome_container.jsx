import { connect } from 'react-redux';
import welcome from './welcome';
import { killWelcome, startTour } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  welcome: state.modals.welcome
});

const mapDispatchToProps = (dispatch) => ({
  startTour: () => dispatch(startTour()),
  killWelcome: () => dispatch(killWelcome())
});

export default connect(mapStateToProps, mapDispatchToProps)(welcome);
