import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';

function Container({
  classes,
  className,
  width,
  children,
}) {
  return (
    <div
      style={width ? { maxWidth: width } : {}}
      className={classNames(classes.root, {
        [className]: className,
      })}>
      {children}
    </div>
  );
}

Container.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.number,
};

export default compose(
  withStyles(styles, {
    name: 'Container',
  }),
)(Container);
