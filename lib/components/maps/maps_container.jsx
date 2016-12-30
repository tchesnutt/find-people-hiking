import { connect } from 'react-redux';
import Maps from './maps';



const mapStateToProps = (state) => {
  return({
  line: state.path.line,
  dist: state.path.dist,
  path: state.path.coordinates
})};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
