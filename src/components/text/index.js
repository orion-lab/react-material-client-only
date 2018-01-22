import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';

class Text extends Component {
  render() {
    const {
      classes,
      className,
      children,
      header,
      headerLevel,
      centered,
    } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
         [classes.header]: header,
         [classes.centered]: centered,
         [classes.h1]: headerLevel === 1,
         [classes.h2]: headerLevel === 2,
         [classes.h3]: headerLevel === 3,
         [classes.h4]: headerLevel === 4,
         [classes.h5]: headerLevel === 5,
         [classes.h6]: headerLevel === 6,
       })}>
       {children}
      </div>
    );
  }
}

Text.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  header: PropTypes.bool,
  centered: PropTypes.bool,
  headerLevel: PropTypes.number,
};

export default compose(
  withStyles(styles, {
    name: 'Text',
  }),
)(Text);
