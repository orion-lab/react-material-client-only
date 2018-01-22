import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import { FormField } from 'react-form';
import FormLabel from '../form--label';
import FormErrorMessage from '../form--errorMessage';
import styles from './styles';

class InputText extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    const { onEnter } = this.props;
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  }
  render() {
    const {
      classes,
      className,
      placeholder,
      type,
      label,
      multiline,
      fieldApi,
      onInput,
      autoFocus,
    } = this.props;

    const {
      getValue,
      getError,
      getWarning,
      getSuccess,
      setValue,
      setTouched,
      getTouched,
    } = fieldApi;

    const value = getValue();
    const error = getError();
    const warning = getWarning();
    const success = getSuccess();
    const touched = getTouched();

    return (
      <div>
        <FormLabel label={label} />
        <TextField
          autoFocus={autoFocus}
          value={value || ''}
          type={type}
          placeholder={placeholder}
          className={classNames(classes.root, {
            [className]: className,
          })}
          multiline={multiline}
          rows={4}
          rowsMax={6}
          onChange={(event) => {
            setValue(event.target.value);
            if (onInput) {
              onInput(event);
            }
          }}
          InputProps={{
            onBlur: () => {
              setTouched();
            },
            onKeyPress: this.handleKeyPress,
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classNames(classes.textFieldInput, {
                [classes.multiline]: multiline,
              }),
            },
          }} />
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={success} />
      </div>
    );
  }
}

InputText.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onEnter: PropTypes.func,
  multiline: PropTypes.bool,
  autoFocus: PropTypes.bool,
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
    name: 'InputText',
  }),
  FormField,
)(InputText);
