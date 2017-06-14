import { connect } from 'react-redux';
import { endTour } from '../actions/modal_actions';
import App from './App';

const mapStateToProps = (state) => ({
  tour: state.modals.tour
});

const mapDispatchToProps = (dispatch) => ({
  endTour: () => dispatch(endTour())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
