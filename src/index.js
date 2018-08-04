import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import configureStore, { preloadedState } from './configureStore';
import Main from 'main/components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore(preloadedState);

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
