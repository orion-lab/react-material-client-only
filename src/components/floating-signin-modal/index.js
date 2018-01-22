import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import CloseIcon from 'material-ui-icons/Close';
import GoogleLoginButton from '../../components/google-login-button';
import GoogleInitialLogo from '../../svgs/google-initial-logo';
import './styles.css';

class FloatingSigninModal extends Component {
  constructor() {
    super();
    this.onScriptLoaded = this.onScriptLoaded.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  state = {
    scriptLoaded: false,
  }
  onClose(e) {
    e.preventDefault();
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }
  onScriptLoaded() {
    this.setState({ scriptLoaded: true });
  }
  render() {
    const { onSuccess, onFailure, clientId } = this.props;
    return (
      <div className={`floatingSigninButton ${this.state.scriptLoaded && 'floatingSigninButton-appear'}`}>
        <Paper zDepth={1}>
          <div className="floatingSigninButton--heading">
            <div className="floatingSigninButton--headingContent">
              <GoogleInitialLogo /> Cannot find Google account
            </div>
            <button className="floatingSigninButton--closeButton" onClick={this.onClose}>
              <CloseIcon className="material-icons" />
            </button>
          </div>
          <Divider />
          <div className="floatingSigninButton--content">
            <div className="floatingSigninButton--text">
              We use Google account to log you in. Click button below to continue using this app.
            </div>
            <GoogleLoginButton
              clientId={clientId}
              onSuccess={onSuccess}
              onFailure={onFailure}
              onScriptLoaded={this.onScriptLoaded} />
          </div>
        </Paper>
      </div>
    );
  }
}

FloatingSigninModal.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  onClose: PropTypes.func,
  clientId: PropTypes.string,
};

export default FloatingSigninModal;
