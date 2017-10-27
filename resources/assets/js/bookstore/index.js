import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

import { fetchCategories } from './actions/categories';

export const store=configureStore();

// store.dispatch(fetchCategories());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,	
	document.getElementById('app')
	);