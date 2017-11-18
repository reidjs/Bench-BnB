import { connect } from 'react-redux';
import Greeting from './greeting';
import { logOut } from  '../actions/session_actions';
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
