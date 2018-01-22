import { createSelector } from 'reselect';

const getUserState = state => state.userState;

export const getUserData = createSelector(
  getUserState,
  user => user.data,
);

export const getRegisterLoading = createSelector(
  getUserState,
  user => user.registerUserIsLoading,
);

export const getShowLoginForm = createSelector(
  getUserState,
  user => user.showLoginForm,
);

export const getUserName = createSelector(
  getUserData,
  user => user && user.name,
);

export const getUserEmail = createSelector(
  getUserData,
  user => user && user.email,
);

export const getUserToken = createSelector(
  getUserData,
  user => user && user.token,
);

export const getUserPicture = createSelector(
  getUserData,
  user => user && user.picture,
);

export const getTokenExpTime = createSelector(
  getUserData,
  user => user && (user.exp * 1000),
);

export const isLoggedIn = createSelector(
  getUserToken,
  getUserName,
  getUserEmail,
  (token, name, email) => (!!token && !!name && !!email),
);
