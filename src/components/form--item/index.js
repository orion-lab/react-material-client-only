import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';

class FormItem extends Component {
  render() {
    const { classes, className, children } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       {children.length ? (
         <div className={classes.columnSplit}>
           {children.map((child, key) => (
             <div className={classes.columnSplitGrid} key={key}>
               <div className={classes.formItem}>
                 {child}
               </div>
             </div>
           ))}
         </div>
       ) : (
         <div className={classes.formItem}>
           {children}
         </div>
       )}
      </div>
    );
  }
}

FormItem.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export default compose(
  withStyles(styles, {
    name: 'FormItem',
  }),
)(FormItem);
