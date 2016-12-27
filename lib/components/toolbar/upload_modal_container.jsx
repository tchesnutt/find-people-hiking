import {connect} from 'react-redux';
import UploadModal from './upload_modal';
import {closeUploadModal} from '../../actions/modal_actions';
import {addPath} from '../../actions/path_actions';

const mapStateToProps = (state) => ({
  uploadModal: state.modals.upload
});

const mapDispatchToProps = (dispatch) => ({
  closeUploadModal: () => dispatch(closeUploadModal()),
  addPath: (path) => dispatch(addPath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
