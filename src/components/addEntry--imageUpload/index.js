import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Button from '../button';
import styles from './styles';

class AddEntryImageUpload extends Component {
  render() {
    const { classes, className } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <div className={classes.imageThumbnails}>
         <button className={classes.imageThumbnailsButton}>
           <img className={classes.imageThumbnailsImage} src="https://crisafullischeeseshop.com/wp-content/uploads/crisafulli_default.png" alt="" />
         </button>
         <button className={classes.imageThumbnailsButton}>
           <img className={classes.imageThumbnailsImage} src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
         </button>
         <button className={classes.imageThumbnailsButton}>
           <img className={classes.imageThumbnailsImage} src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
         </button>
         <button className={classes.imageThumbnailsButton}>
           <img className={classes.imageThumbnailsImage} src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
         </button>
       </div>
       <div className={classes.imageBigThumbnail}>
         <img className={classes.imageBigThumbnailImage} src="https://crisafullischeeseshop.com/wp-content/uploads/crisafulli_default.png" alt="" />
       </div>
       <div className={classes.changeImageButtonWrapper}>
         <Button
           small
           label="Change Image" />
       </div>
      </div>
    );
  }
}

AddEntryImageUpload.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'AddEntryImageUpload',
  }),
)(AddEntryImageUpload);
