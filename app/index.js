import React from 'react';
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import getRoutes from './config/routes'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import users from 'redux/modules/users';
import {checkIfAuthed} from 'helpers/auth'
const store = createStore(users, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))
// Main idea: user after authed is redirected to feed
// Unauthed user when trying to accessed routes other than home and auth,
// is redirect to auth
function checkAuth(nextState, replace) {
  if (store.getState().isFetching) {
    return
  }
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed) {
      replace('/feed')
    }
  } else {
    if (!isAuthed) {
      replace('/auth')
    }
  }
}
ReactDOM.render(
  <Provider store={store}>{getRoutes(checkAuth)}</Provider>
    , document.getElementById('app'));
