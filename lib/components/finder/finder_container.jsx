import { connect } from 'react-redux';
import { addLineAndDist } from '../../actions/path_actions';
import { showError } from '../../actions/modal_actions';
import Finder from './finder';



const mapStateToProps = (state) => ({
  path: state.path.coordinates,
  line: state.path.line,
  dist: state.path.dist
});

const mapDispatchToProps = dispatch => ({
  addLineAndDist: (obj) => dispatch(addLineAndDist(obj)),
  showError: (message) => dispatch(showError(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
