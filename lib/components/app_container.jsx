import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  tour: state.modals.tour
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
