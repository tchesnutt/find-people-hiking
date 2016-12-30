import { connect } from 'react-redux';
import DataTable from './data_table';
import { updatePath } from '../../actions/path_actions';



const mapStateToProps = (state) => ({
  path: state.path.coordinates
});

const mapDispatchToProps = dispatch => ({
  updatePath: (path) => dispatch(updatePath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
