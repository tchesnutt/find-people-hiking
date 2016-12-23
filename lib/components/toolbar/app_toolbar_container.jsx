import { connect } from 'react-redux';
import AppToolbar from './app_toolbar';
import { openUploadModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  uploadDataModal: state.modals.upload
});

const mapDispatchToProps = dispatch => ({
  openUploadModal: () => dispatch(openUploadModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppToolbar)
