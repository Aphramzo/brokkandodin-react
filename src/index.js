import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import { paramsToObject } from './utilities/UrlHelpers';
import './index.css';
import App from './App';

const store = configureStore({
  search: paramsToObject(window.location.search),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
