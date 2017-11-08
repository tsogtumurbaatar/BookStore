import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

import { fetchCategories } from './actions/categories';
import { fetchBooks } from './actions/books';

export const store=configureStore();

store.dispatch(fetchCategories());
store.dispatch(fetchBooks());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,	
	document.getElementById('app')
	);