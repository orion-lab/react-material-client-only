import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Toolbar from 'material-ui/Toolbar';
import NotificationIcon from 'material-ui-icons/Notifications';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import DribbleLogo from '../../svgs/dribble-logo';
import HeaderUserMenu from '../header--userMenu';
import HeaderSearch from '../header--search';
import styles from './styles';

function HeaderToolbar({ classes, className }) {
  return (
    <Toolbar className={classNames(classes.root, {
       [className]: className,
     })}>
      <div className={classes.leftSide}>
        <DribbleLogo fill="#333" />
      </div>
      <div className={classes.centerSide}>
        <HeaderSearch />
      </div>
      <div className={classes.rightSide}>
        <IconButton>
          <Badge
            badgeContent={0}
            color="primary">
            <ShoppingCartIcon color="#333" />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge
            badgeContent={6}
            color="primary">
            <NotificationIcon color="#333" />
          </Badge>
        </IconButton>
        <HeaderUserMenu />
      </div>
    </Toolbar>
  );
}

HeaderToolbar.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
     leftSide: PropTypes.string,
     centerSide: PropTypes.string,
     rightSide: PropTypes.string,
   }),
  className: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'HeaderToolbar',
  }),
)(HeaderToolbar);
