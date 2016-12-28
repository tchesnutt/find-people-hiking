import { connect } from 'react-redux';
import Maps from './maps';



const mapStateToProps = (state) => {
  return({
  path: state.path.coordinates
})};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
