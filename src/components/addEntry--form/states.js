import { getFormData } from '../../reducers/form/selectors';

export default (state, props) => ({
  entryCategories: [],
  values: getFormData('add-entry')(state, props),
});
