import { isLoggedIn, getUserPicture, getRegisterLoading } from '../../reducers/user/selectors';

export default (states, props) => ({
  isLoggedIn: isLoggedIn(states, props),
  userPicture: getUserPicture(states, props),
  isLoadingRegister: getRegisterLoading(states, props),
});
