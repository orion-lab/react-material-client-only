import { changeFormValues } from '../../reducers/form/actions';

export default dispatch => ({
  setValues: data => dispatch(changeFormValues('add-entry', data)),
});
