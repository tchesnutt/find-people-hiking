import { connect } from 'react-redux';
import DataTable from './data_table';



const mapStateToProps = (state) => ({
  path: state.coordinates
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
