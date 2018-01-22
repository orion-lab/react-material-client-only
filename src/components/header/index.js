import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderToolbar from '../header--toolbar';

class Header extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <AppBar
          className={classes.appBar}
          color="inherit"
          position="static">
          <HeaderToolbar />
          {children}
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.shape({
    appBar: PropTypes.string,
    tab: PropTypes.string,
    tabLabel: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'Header',
  }),
)(Header);
