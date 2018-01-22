export const registerUserLoading = isLoading => ({
  type: 'USER_LOGIN/REGISTER_USER__LOADING',
  isLoading,
});

export const registerUserFail = errorMessage => ({
  type: 'USER_LOGIN/REGISTER_USER__FAIL',
  errorMessage,
});

export const registerUserSuccess = data => ({
  type: 'USER_LOGIN/REGISTER_USER__SUCCESS',
  data,
});

export const googleAccountRegister = userIdToken => async (dispatch, getState, { app }) => {
  try {
    const googleLoginService = app.service('google-login');
    dispatch(registerUserLoading(true));
    const userData = await googleLoginService.create({
      idToken: userIdToken,
    });
    dispatch(registerUserLoading(false));
    dispatch(registerUserSuccess(userData));
    return true;
  } catch (e) {
    dispatch(registerUserLoading(false));
    dispatch(registerUserFail(e.name));
  }
};

export const hideLoginForm = () => ({
  type: 'USER_LOGIN/HIDE_LOGIN_FORM',
});

export const showLoginForm = () => ({
  type: 'USER_LOGIN/SHOW_LOGIN_FORM',
});

export const logout = () => ({
  type: 'USER_LOGIN/LOGOUT',
});
