import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import { FormField } from 'react-form';
import FormLabel from '../form--label';
import FormErrorMessage from '../form--errorMessage';
import styles from './styles';

class Multiselect extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(event, slug, checked) {
    const {
      onInput,
      fieldApi: {
        getValue,
        setValue,
        setTouched,
      },
    } = this.props;

    const value = getValue() || [];

    let valueArray;
    if (checked) {
      valueArray = [].concat(value, slug);
    } else {
      valueArray = value.filter(val => val !== slug);
    }
    // Set value
    setValue(valueArray);
    setTouched();
    if (onInput) {
      onInput(event);
    }
  }
  render() {
    const {
      classes,
      className,
      label,
      options,
      grid,
      fieldApi,
    } = this.props;

    const {
      getValue,
      getError,
      getWarning,
      getSuccess,
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
       <FormLabel label={label} />
       <div className={classNames(classes.optionsWrapper, {
         [classes.grid]: grid,
       })}>
         {options && options.length && options.map((option, key) => (
           <FormControlLabel
             className={classNames(classes.formLabel, {
               [classes.formLabelGrid]: grid,
             })}
             key={key}
             label={option.name}
             control={(
               <Checkbox
                 className={classes.checkbox}
                 onChange={(event, checked) => this.onChange(event, option.id, checked)}
                 checked={value && !!value.length && value.includes(option.id)} />
             )} />
         ))}
       </div>
       <FormErrorMessage
         touched={touched}
         error={error}
         warning={warning}
         success={success} />
      </div>
    );
  }
}

Multiselect.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
  })),
  grid: PropTypes.bool,
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
    name: 'Multiselect',
  }),
  FormField,
)(Multiselect);
