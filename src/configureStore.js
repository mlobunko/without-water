import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const preloadedState = () => {
  const authorized = localStorage.getItem('authorized');
  if (authorized === 'true') {
    const logIn = localStorage.getItem('logIn');
    return {
      authorized: true,
      logIn: logIn
    };
  }
};

export default preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState(), composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
