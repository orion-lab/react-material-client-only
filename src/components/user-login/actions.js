import { hideLoginForm, googleAccountRegister, logout } from '../../reducers/user/actions';

export default dispatch => ({
  hideLoginForm: () => dispatch(hideLoginForm()),
  registerUser: userIdToken => dispatch(googleAccountRegister(userIdToken)),
  logout: () => dispatch(logout()),
});
