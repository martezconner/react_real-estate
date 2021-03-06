import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import Layout from './routes';
import reducers from './reducers';

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, withDevTools(applyMiddleware(reduxThunk)));


const Root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  Root);