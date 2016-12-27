import { connect } from 'react-redux';
import Maps from './maps';



const mapStateToProps = (state) => ({
  path: state.coordinates
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
