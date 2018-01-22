import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM/CHANGE_FORM_VALUES': {
      return {
        ...state,
        [action.name]: action.values,
      };
    }
    default: {
      return state;
    }
  }
};

const config = {
  key: 'eatronFormState',
  storage,
};

export default persistReducer(config, formReducer);
