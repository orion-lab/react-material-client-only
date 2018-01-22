import { createSelector } from 'reselect';
import { getFormData } from '../../reducers/form/selectors';

export const getFormNameValue = createSelector(
  getFormData('add-entry'),
  formData => formData && formData.name,
);
