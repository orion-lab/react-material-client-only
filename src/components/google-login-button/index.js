import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.gapi = window.gapi;
  }
  formatSuccessData(data) {
    return {
      authMethod: 'https://www.googleapis.com',
      displayName: data.w3.ig,
      id: data.w3.U3,
      idToken: data.Zi.id_token,
      profilePicture: data.w3.Paa,
    };
  }
  onSuccess(data) {
    if (this.props.onSuccess) {
      this.props.onSuccess(this.formatSuccessData(data));
    }
  }
  onFailure(error) {
    if (this.props.onFailure) {
      this.props.onSuccess(error);
    }
  }
  onScriptLoaded() {
    if (this.props.onScriptLoaded) {
      this.props.onScriptLoaded();
    }
  }
  scriptLoaded() {
    const { gapi } = window;
    const { clientId } = this.props;
    // Update state to tell script is loaded
    if (gapi) {
      gapi.load('auth2', () => {
        gapi.auth2.init({
           client_id: clientId,
         });
      });
      gapi.signin2.render('signin-button', {
         client_id: clientId,
         scope: 'profile email',
         longtitle: true,
         theme: 'dark',
         onsuccess: this.onSuccess.bind(this),
         onfailure: this.onFailure.bind(this),
      });
      // Fire script loaded event
      this.onScriptLoaded();
    }
  }
  loadScript() {
    // Check if gapi script exist
    const gapiScript = document.getElementById('google-api-platform');
    if (gapiScript) {
      // If exist call callback
      return this.scriptLoaded();
    }
    // else add script to document
    const newScript = document.createElement('script');
    newScript.setAttribute('type', 'text/javascript');
    newScript.setAttribute('id', 'google-api-platform');
    newScript.setAttribute('src', 'https://apis.google.com/js/platform.js');
    // IE triggers this event when the file is loaded
    if (newScript.attachEvent) {
      newScript.attachEvent('onreadystatechange', () => {
        if (newScript.readyState === 'complete' || newScript.readyState === 'loaded') {
          this.scriptLoaded();
        }
      });
    }
    if (newScript.addEventListener) {
      newScript.addEventListener('load', this.scriptLoaded.bind(this), false);
    }
    document.getElementsByTagName('head')[0].appendChild(newScript);
  }
  componentDidMount() {
    this.loadScript();
  }
  render() {
    return (
      <div id="signin-button" />
    );
  }
}

GoogleLogin.propTypes = {
  clientId: PropTypes.string,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  onScriptLoaded: PropTypes.func,
};

export default GoogleLogin;
