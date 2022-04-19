import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from 'redux-saga' 
import { applyMiddleware,  createStore } from 'redux';
import { rootReduser } from './redux/redusers/rootReaduser';
import './index.css';
import { ourSaga } from './redux/saga/saga';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReduser,  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(ourSaga);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App></App>
    </Provider>
  </React.StrictMode>,
);