import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import InputText from '../form--inputText';
import Select from '../form--select';
import Multiselect from '../form--multiselect';
import AddEntryImageUpload from '../addEntry--imageUpload';
import FormItem from '../form--item';
import Switch from '../form--switch';
import Form from '../form';
import errorValidator from './validators/errors';
import styles from './styles';
import states from './states';
import actions from './actions';

class AddEntryForm extends Component {
  render() {
    const {
      classes,
      className,
      getSubmitRef,
      setValues,
      entryCategories,
      onSubmit,
      values,
    } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <Form
         values={values}
         errorValidator={errorValidator}
         setValues={setValues}
         getSubmitRef={getSubmitRef}
         onSubmit={onSubmit}>
         <div className={classes.gridWrapper}>
           <div className={classNames(classes.grid, classes.left)}>
             <FormItem>
               <InputText
                 field="name"
                 label="Product Name"
                 placeholder="Dragon Breath" />
             </FormItem>
             <FormItem>
               <InputText
                 field="description"
                 multiline
                 label="Product Description"
                 placeholder="Description" />
             </FormItem>
             <FormItem>
               <InputText
                 field="price"
                 type="number"
                 label="Default Price"
                 placeholder="Price" />
               <Select
                 label="Currency"
                 field="currency"
                 options={[{
                   name: '(IDR) Rupiah',
                   value: 'IDR',
                 }, {
                   name: '(USD) US Dollar',
                   value: 'USD',
                 }]} />
             </FormItem>
             <FormItem>
               <Switch
                 field="availability"
                 label="Stock Available" />
             </FormItem>
             {entryCategories && (
               <FormItem>
                 <Multiselect
                   grid
                   field="category"
                   label="Category"
                   options={[{
                     id: 'value1',
                     name: 'Computer',
                   }, {
                     id: 'value2',
                     name: 'Food',
                   }, {
                     id: 'value3',
                     name: 'Dress',
                   }, {
                     id: 'value4',
                     name: 'Cap',
                   }, {
                     id: 'value5',
                     name: 'Services',
                   }, {
                     id: 'value6',
                     name: 'Movies',
                   }]} />
               </FormItem>
             )}
           </div>
           <div className={classNames(classes.grid, classes.right)}>
             <AddEntryImageUpload />
           </div>
         </div>
       </Form>
      </div>
    );
  }
}

AddEntryForm.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  getSubmitRef: PropTypes.func,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    availability: PropTypes.bool,
    category: PropTypes.arrayOf(PropTypes.string),
  }),
  entryCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
  })),
};

export default compose(
  withRouter,
  withStyles(styles, {
    name: 'AddEntryForm',
  }),
  connect(states, actions),
)(AddEntryForm);
