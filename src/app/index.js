import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import { PersistGate } from 'redux-persist/es/integration/react';
import { MuiThemeProvider } from 'material-ui/styles';
import Routes from '../routes';
import configureStore from '../configureStore';
import theme from '../muiTheme';
import UserLogin from '../components/user-login';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { store, persistor } = configureStore({
      googleyolo: props.googleyolo,
    });
    this.store = store;
    this.persistor = persistor;
  }
  render() {
    const { googleyolo } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={this.store}>
          <PersistGate persistor={this.persistor}>
            <Router>
              <div>
                <Routes />
                <UserLogin googleyolo={googleyolo} />
              </div>
            </Router>
          </PersistGate>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  googleyolo: PropTypes.object, // eslint-disable-line
};

export default App;
