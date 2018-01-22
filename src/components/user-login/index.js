import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleOneTapLogin from '../../components/google-one-tap-login';
import states from './states';
import actions from './actions';

class UserLogin extends React.Component {
  constructor() {
    super();
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }
  onLoginSuccess(data) {
    const { registerUser } = this.props;
    const { idToken } = data;
    registerUser(idToken);
  }
  checkIfTokenExpired() {
    // Check if idToken expired
    const { idTokenExp, logout } = this.props;
    const currentTime = new Date().getTime();
    if (currentTime > idTokenExp) {
      logout();
    }
  }
  componentWillMount() {
    this.checkIfTokenExpired();
  }
  render() {
    const {
      googleyolo,
      user,
      hideLoginForm,
      showLoginForm,
    } = this.props;
    if (user || !showLoginForm) return null;
    return (
      <div>
        <GoogleOneTapLogin
          onLoginSuccess={this.onLoginSuccess}
          onFormAbort={hideLoginForm}
          googleyolo={googleyolo} />
      </div>
    );
  }
}

UserLogin.propTypes = {
  googleyolo: PropTypes.object, // eslint-disable-line
  user: PropTypes.shape({
    authMethod: PropTypes.string,
    displayName: PropTypes.string,
    id: PropTypes.string,
    idToken: PropTypes.string,
  }),
  hideLoginForm: PropTypes.func,
  registerUser: PropTypes.func,
  logout: PropTypes.func,
  showLoginForm: PropTypes.bool,
  idTokenExp: PropTypes.number,
};

export default connect(states, actions)(UserLogin);
