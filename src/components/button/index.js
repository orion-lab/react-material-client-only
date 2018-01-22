import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';

class ButtonComponent extends Component {
  getProps() {
    const {
      to,
      onClick,
      raised,
      disabled,
    } = this.props;

    const props = {
      raised,
      disabled,
    };

    if (to) {
      props.component = Link;
      props.to = to;
    } else if (onClick) {
      props.onClick = onClick;
    }

    if (raised) {
      props.color = 'accent';
    }

    return props;
  }
  render() {
    const {
      classes,
      className,
      icon,
      label,
      disabled,
      leftIcon,
      rightIcon,
      raised,
      leftGutter,
      rightGutter,
      small,
    } = this.props;

    const buttonProps = this.getProps();
    const LeftIcon = leftIcon;
    const RightIcon = rightIcon;

    if (icon) {
      return (
        <IconButton
          disabled={disabled}
          className={classes.iconButton}
          aria-label={label}>
          {icon}
        </IconButton>
      );
    }

    return (
      <Button
        {...buttonProps}
        className={classNames(classes.root, {
          [className]: className,
          [classes.noLabel]: !label,
          [classes.raised]: raised,
          [classes.leftGutter]: leftGutter,
          [classes.rightGutter]: rightGutter,
          [classes.small]: small,
        })}>
        {leftIcon && (
          <span className={classNames(classes.iconWrapper, classes.leftIcon)}>
            <LeftIcon className={classes.icon} />
          </span>
        )}
        {label}
        {rightIcon && (
          <span className={classNames(classes.iconWrapper, classes.rightIcon)}>
            <RightIcon className={classes.icon} />
          </span>
        )}
      </Button>
    );
  }
}

ButtonComponent.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
     iconButton: PropTypes.string,
     leftIcon: PropTypes.string,
     rightIcon: PropTypes.string,
     raised: PropTypes.string,
     noLabel: PropTypes.string,
  }),
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  rightIcon: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.node,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  leftGutter: PropTypes.bool,
  rightGutter: PropTypes.bool,
  small: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  raised: true,
};

export default compose(
  withStyles(styles, {
    name: 'ButtonComponent',
  }),
)(ButtonComponent);
