import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/commentsReducer'
import logger from "redux-logger";
import './index.css'
import promise from "redux-promise-middleware";
//use an asynchronous action
//npm install redux-thunk --save
import thunk from "redux-thunk";
//you could also write your own createStore function and put it into seperate file e.g store.js

//createStore with reducder, store's state(here empty), applyMiddleware
const store = createStore(
  commentsReducer,
  {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);
