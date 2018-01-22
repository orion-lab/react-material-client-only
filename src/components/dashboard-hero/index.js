import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Container from '../container';
import Button from '../button';
import styles from './styles';

class DashboardHero extends Component {
  render() {
    const {
      classes,
      className,
      submitRef,
      title,
    } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
        <Container className={classes.container}>
          <div className={classes.title}>
            {title}
          </div>
          <div className={classes.actions}>
            <Button
              label="Cancel"
              raised={false} />
            <Button
              onClick={submitRef}
              label="Save" />
          </div>
        </Container>
      </div>
    );
  }
}

DashboardHero.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  title: PropTypes.string,
  submitRef: PropTypes.func,
};

export default compose(
  withStyles(styles, {
    name: 'DashboardHero',
  }),
)(DashboardHero);
