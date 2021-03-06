import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

  const enhancer = composeEnhancers(applyMiddleware(thunk));
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}
