import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducer from './reducers';

import { changeContent } from './actions/changeContent';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//let store = createStore(rootReducer);

//console.log(store.getState());

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

//store.dispatch(changeContent());

// unsubscribe();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
