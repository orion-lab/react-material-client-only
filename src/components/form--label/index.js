import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';

class FormLabel extends Component {
  render() {
    const {
      classes,
      className,
      label,
    } = this.props;

    if (!label) return null;

    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       {label}
      </div>
    );
  }
}

FormLabel.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  label: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'FormLabel',
  }),
)(FormLabel);
