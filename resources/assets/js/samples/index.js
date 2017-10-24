import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';

import { Router, hashHistory } from 'react-router';
import routes from './routes';




const initialState ={
		 	
			setFilter: "SHOW_ALL"
}

let store = createStore(todoApp,initialState, applyMiddleware(thunk));


ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory} routes={routes} />
	</Provider> ,
	document.getElementById('app')
);
