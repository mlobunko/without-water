import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import userReducer from "./redux/reducer";
import rootSaga from "./saga/rootSaga";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    user: userReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
