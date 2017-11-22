import { SignInForm } from '../components/SignInForm.js';
import { connect } from 'react-redux';
import { signInUser } from '../actions/users';


const mapDispatchToProps = (dispatch) => {
  return {
   signInUser :(inputs) =>  dispatch(signInUser(inputs))
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

// https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
// https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/containers/SignInFormContainer.js