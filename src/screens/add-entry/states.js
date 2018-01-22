import { getUserToken } from '../../reducers/user/selectors';
import { getFormNameValue } from './selectors';

export default (state, props) => ({
  entryCategories: [],
  eateryId: 'aaa',
  token: getUserToken(state, props),
  formNameValue: getFormNameValue(state, props),
});
