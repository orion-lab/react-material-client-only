import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import classNames from 'classnames';
import styles from './styles';

class DialogComponent extends Component {
  render() {
    const {
      classes,
      className,
      open,
      headerIcon,
      children,
    } = this.props;
    const HeaderIcon = headerIcon;
    return (
      <Dialog
        className={classNames(classes.root, {
          [className]: className,
        })}
        maxWidth="xs"
        open={open}>
         <div className={classes.header}>
           <div className={classes.headerIcon}>
             <HeaderIcon className={classes.icon} />
           </div>
         </div>
         <DialogContent className={classes.dialogContent}>
           {children}
         </DialogContent>
      </Dialog>
    );
  }
}

DialogComponent.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  headerIcon: PropTypes.func,
};

export default compose(
  withStyles(styles, {
    name: 'DialogComponent',
  }),
)(DialogComponent);
