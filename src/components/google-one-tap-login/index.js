import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingSigninModal from '../floating-signin-modal';
import config from '../../config';

class GoogleOneTapLogin extends Component {
  constructor(props) {
    super(props);
    this.googleyoloOptions = config('googleyoloOptions');
    this.state = {};
    this.signinUser = this.signinUser.bind(this);
    this.onSuccessAuth = this.onSuccessAuth.bind(this);
    this.onCredentialModalClose = this.onCredentialModalClose.bind(this);
    this.renderSigninModal = this.renderSigninModal.bind(this);
    this.unrenderSigninModal = this.unrenderSigninModal.bind(this);
  }
  onSuccessAuth(credential) {
    const { onLoginSuccess } = this.props;
    this.unrenderSigninModal();
    // Save to local state
    onLoginSuccess(credential);
  }
  onCredentialModalClose() {
    const { onFormAbort } = this.props;
    this.unrenderSigninModal();
    onFormAbort();
  }
  renderSigninModal() {
    this.setState({ showSignInModal: true });
  }
  unrenderSigninModal() {
    this.setState({ showSignInModal: false });
  }
  async signupUser() {
    try {
      const { googleyolo } = this.props;
      const credential = await googleyolo.hint(this.googleyoloOptions);
      this.onSuccessAuth(credential);
    } catch (error) {
      if (error.type === 'noCredentialsAvailable') {
        this.renderSigninModal();
      } else if (error.type === 'userCanceled') {
        this.props.onFormAbort();
      }
    }
  }
  async signinUser() {
    try {
      // Unrender signin modal if any
      this.unrenderSigninModal();
      const { googleyolo } = this.props;
      const credential = await googleyolo.retrieve(this.googleyoloOptions);
      this.onSuccessAuth(credential);
    } catch (error) {
      if (error.type === 'noCredentialsAvailable') {
        this.signupUser();
      } else if (error.type === 'userCanceled') {
        this.props.onFormAbort();
      } else {
        this.renderSigninModal();
      }
    }
  }
  componentDidMount() {
    this.signinUser();
  }
  render() {
    const { showSignInModal } = this.state;
    if (showSignInModal) {
      return (
        <FloatingSigninModal
          clientId={config('googleapi.clientId')}
          onClose={this.onCredentialModalClose}
          onSuccess={this.onSuccessAuth} />
      );
    }
    return null;
  }
}

GoogleOneTapLogin.propTypes = {
  googleyolo: PropTypes.object, // eslint-disable-line
  onLoginSuccess: PropTypes.func,
  onFormAbort: PropTypes.func,
};

export default GoogleOneTapLogin;
