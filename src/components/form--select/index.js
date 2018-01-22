import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { FormField } from 'react-form';
import { MenuItem } from 'material-ui/Menu';
import FormLabel from '../form--label';
import FormErrorMessage from '../form--errorMessage';
import styles from './styles';

class SelectForm extends React.Component {
  render() {
    const {
      classes,
      className,
      label,
      options,
      fieldApi,
      onInput,
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
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <FormLabel label={label} />
       <Select
         autoWidth
         value={value || (options && options.length && options[0].value)}
         onChange={(event) => {
           setValue(event.target.value);
           if (onInput) {
             onInput(event);
           }
         }}
         displayEmpty
         onClose={setTouched}
         input={<Input className={classes.inputRoot} />}
         classes={{
           root: classes.selectRoot,
           select: classes.selectRoot,
           selectMenu: classes.selectMenu,
         }}>
         {options && !!options.length && options.map((option, key) => (
           <MenuItem key={key} value={option.value}>{option.name}</MenuItem>
         ))}
       </Select>
       <FormErrorMessage
         touched={touched}
         error={error}
         warning={warning}
         success={success} />
      </div>
    );
  }
}

SelectForm.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
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
    name: 'Select',
  }),
  FormField,
)(SelectForm);
