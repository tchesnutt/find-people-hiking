import { connect } from 'react-redux';
import Finder from './finder';
import { addLineAndDist } from '../../actions/path_actions';



const mapStateToProps = (state) => ({
  path: state.path.coordinates,
  line: state.path.line,
  dist: state.path.dist
});

const mapDispatchToProps = dispatch => ({
  addLineAndDist: (obj) => dispatch(addLineAndDist(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
