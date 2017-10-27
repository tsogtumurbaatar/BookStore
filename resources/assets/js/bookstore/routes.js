import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './pages/App';
import WelcomePage from './pages/WelcomePage';
import BooksIndex from './pages/BooksIndex';
import BookForm from './pages/BookForm';
import CategoriesIndex from './pages/CategoriesIndex';
import CategoryForm from './pages/CategoryForm';



export default (
<Route path="/" component={App}>
 	<IndexRoute component={WelcomePage} />
  	<Route path="books" component={BooksIndex} />
  	<Route path="books/new" component={BookForm} />
  	<Route path="category" component={CategoriesIndex} />
  	<Route path="category/new" component={CategoryForm} />
  	<Route path="category/new/:catid" component={CategoryForm} />
</Route>
);