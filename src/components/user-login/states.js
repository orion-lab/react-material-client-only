import { getUserData, getShowLoginForm, getTokenExpTime } from '../../reducers/user/selectors';

export default state => ({
  user: getUserData(state),
  showLoginForm: getShowLoginForm(state),
  idTokenExp: getTokenExpTime(state),
});
