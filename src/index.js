import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';
import { rootReducer } from './stores/rootReducer';



export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

serviceWorker.unregister();
