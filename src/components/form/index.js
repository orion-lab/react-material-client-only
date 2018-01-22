import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';

class FormComponent extends Component {
  render() {
    const {
      children,
      errorValidator,
      setValues,
      getSubmitRef,
      onSubmit,
      values,
    } = this.props;
    return (
      <Form
        defaultValues={values}
        validateError={errorValidator}
        getApi={formApi => getSubmitRef && getSubmitRef(formApi.submitForm)}
        formDidUpdate={formState => setValues(formState.values)}
        onSubmit={val => onSubmit && onSubmit(val)}>
        { formApi => (
          <form onSubmit={formApi.submitForm}>
            {children}
          </form>
        )}
      </Form>
    );
  }
}

FormComponent.propTypes = {
  values: PropTypes.object,
  children: PropTypes.object,
  errorValidator: PropTypes.func,
  setValues: PropTypes.func,
  getSubmitRef: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default FormComponent;
