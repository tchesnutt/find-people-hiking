import { connect } from 'react-redux';
import DataTable from './data_table';
import { updatePath } from '../../actions/path_actions';
import { showError } from '../../actions/modal_actions';



const mapStateToProps = (state) => ({
  path: state.path.coordinates
});

const mapDispatchToProps = dispatch => ({
  updatePath: (path) => dispatch(updatePath(path)),
  showError: (message) => dispatch(showError(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
