import { createSelector } from 'reselect';

export const getFormState = state => state.formState;

export const getFormData = formId => createSelector(
  getFormState,
  form => form && form[formId],
);
