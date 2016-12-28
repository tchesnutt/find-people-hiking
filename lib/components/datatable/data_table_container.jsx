import { connect } from 'react-redux';
import DataTable from './data_table';



const mapStateToProps = (state) => ({
  path: state.path.coordinates
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
