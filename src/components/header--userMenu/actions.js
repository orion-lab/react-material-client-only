import { logout, showLoginForm } from '../../reducers/user/actions';

export default dispatch => ({
  logout: () => dispatch(logout()),
  showLoginForm: () => dispatch(showLoginForm()),
});
