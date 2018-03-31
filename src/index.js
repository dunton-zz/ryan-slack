import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import initial_state from './initial_state';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)
 
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
 
    console.log('state after dispatch', getState())
 
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


const store = createStore(reducers, initial_state,
  applyMiddleware(logger));

store.dispatch({
	type: 'INIT_STATE',
	users: initial_state
});
 

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));


