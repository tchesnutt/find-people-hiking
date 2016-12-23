import { connect } from 'react-redux';
import Toolbar from './toolbar';


const mapStateToProps = (state) => ({
  uploadDataModal: state.modals.upload
});

const mapDispatchToProps = dispatch => ({
  openUploadModal: () => dispatch(openUploadModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
