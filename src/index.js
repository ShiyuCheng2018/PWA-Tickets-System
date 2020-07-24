import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './todoReduxClass/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./todoReduxClass/reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
