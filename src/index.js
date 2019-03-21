import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './typo.css';
import './Glyphter.css';
import AppRouter from './App';
import * as serviceWorker from './serviceWorker';
import 'whatwg-fetch'
// import { applyMiddleware, compose, createStore } from 'redux'
// import createRootReducer from './reducers'
// import { routerMiddleware } from 'connected-react-router'
// import { createBrowserHistory } from 'history'


// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const history = createBrowserHistory();
// const store = createStore(
//     createRootReducer(history), // root reducer with router state
//     composeEnhancers(
//       applyMiddleware(
//         routerMiddleware(history), // for dispatching history actions
//         // ... other middlewares ...
//       ),
//     ),
//   )

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
