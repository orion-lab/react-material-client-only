import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const initialState = {
  showLoginForm: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN/LOGOUT': {
      return {
        ...state,
        data: null,
        showLoginForm: true,
      };
    }
    case 'USER_LOGIN/HIDE_LOGIN_FORM': {
      return {
        ...state, showLoginForm: false,
      };
    }
    case 'USER_LOGIN/SHOW_LOGIN_FORM': {
      return {
        ...state, showLoginForm: true,
      };
    }
    case 'USER_LOGIN/REGISTER_USER__LOADING': {
      return {
        ...state, registerUserIsLoading: action.isLoading,
      };
    }
    case 'USER_LOGIN/REGISTER_USER__FAIL': {
      return {
        ...state, registerUserErrorMessage: action.errorMessage,
      };
    }
    case 'USER_LOGIN/REGISTER_USER__SUCCESS': {
      return {
        ...state, data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

const config = {
  key: 'eatronUserLoginState',
  storage,
};

export default persistReducer(config, userReducer);
