import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import LoadingIcon from '../../svgs/loading-icon';
import styles from './styles';
import states from './states';
import actions from './actions';

class HeaderUserMenu extends Component {
  constructor() {
    super();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      anchorEl: null,
    };
  }
  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleRequestClose() {
    this.setState({ anchorEl: null });
  }
  logout() {
    const { logout } = this.props;
    this.handleRequestClose();
    logout();
  }
  render() {
    const { anchorEl } = this.state;
    const {
      classes,
      isLoggedIn,
      userPicture,
      isLoadingRegister,
      showLoginForm,
    } = this.props;
    const open = Boolean(anchorEl);
    return (
      <div>
        {!isLoggedIn && !isLoadingRegister && (
          <IconButton
            onClick={showLoginForm}>
            <AccountCircle color="#333" />
          </IconButton>
        )}
        {!isLoggedIn && isLoadingRegister && (
          <IconButton>
            <LoadingIcon fill="#333" width={22} height={22} />
          </IconButton>
        )}
        {isLoggedIn && (
          <div>
            <IconButton
              aria-owns={open ? 'header-user-menu' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}>
              <Avatar src={userPicture} className={classes.avatar} />
            </IconButton>
            <Menu
              id="header-user-menu"
              className={classes.menu}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onRequestClose={this.handleRequestClose}>
              <MenuItem className={classes.menuItem} onClick={this.logout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
    );
  }
}

HeaderUserMenu.propTypes = {
  classes: PropTypes.shape({
    menu: PropTypes.string,
    menuItem: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool,
  isLoadingRegister: PropTypes.bool,
  userPicture: PropTypes.string,
  logout: PropTypes.func,
  showLoginForm: PropTypes.func,
};

export default compose(
  withStyles(styles, {
    name: 'HeaderUserMenu',
  }),
  connect(states, actions),
)(HeaderUserMenu);
