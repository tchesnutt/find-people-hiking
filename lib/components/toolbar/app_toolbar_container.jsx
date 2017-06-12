import { connect } from 'react-redux';
import AppToolbar from './app_toolbar';
import { openUploadModal, startTour } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  uploadDataModal: state.modals.upload
});

const mapDispatchToProps = dispatch => ({
  openUploadModal: () => dispatch(openUploadModal()),
  startTour: () => dispatch(startTour())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppToolbar)
