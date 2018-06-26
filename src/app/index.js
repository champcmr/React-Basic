import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import routes from './routes';
import configureStore from './store/configureStore';
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);