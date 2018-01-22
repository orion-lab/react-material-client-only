import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './reducers';
import app from './featherSetup';

function configureStore({ googleyolo }) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ googleyolo, app })),
  );
  const store = createStore(reducers, enhancers);
  const persistor = persistStore(store);
  return { store, persistor };
}
export default configureStore;
