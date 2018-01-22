import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { FormField } from 'react-form';
import FormErrorMessage from '../form--errorMessage';
import styles from './styles';

class SwitchComponent extends Component {
  render() {
    const {
      classes,
      className,
      label,
      onInput,
      fieldApi,
    } = this.props;

    const {
      getValue,
      setValue,
      getError,
      getWarning,
      getSuccess,
      setTouched,
      getTouched,
    } = fieldApi;

    const value = getValue();
    const error = getError();
    const warning = getWarning();
    const success = getSuccess();
    const touched = getTouched();

    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <FormControlLabel
         label={label}
         control={(
           <Switch
             checked={value}
             onChange={(event, checked) => {
               setValue(checked);
               setTouched();
               if (onInput) {
                 onInput(event);
               }
             }} />
         )} />
       <FormErrorMessage
         touched={touched}
         error={error}
         warning={warning}
         success={success} />
      </div>
    );
  }
}

SwitchComponent.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  label: PropTypes.string,
  fieldApi: PropTypes.shape({
    getValue: PropTypes.func,
    getError: PropTypes.func,
    getWarning: PropTypes.func,
    getSuccess: PropTypes.func,
    setValue: PropTypes.func,
    setTouched: PropTypes.func,
  }),
  onInput: PropTypes.func,
};

export default compose(
  withStyles(styles, {
    name: 'SwitchComponent',
  }),
  FormField,
)(SwitchComponent);
