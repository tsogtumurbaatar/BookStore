import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './HomePage';
import {CalcContainer} from './CalcContainer';


export default (
<Route path="/" component={App}>	
	<IndexRoute component={HomePage} />
	<Route path="/calc" component={CalcContainer} />
	
</Route>
);