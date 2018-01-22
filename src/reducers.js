// Put all reducers here
import { combineReducers } from 'redux';
import formState from './reducers/form/reducer';
import userState from './reducers/user/reducer';

const rootReducer = combineReducers({
  formState,
  userState,
});

export default rootReducer;
