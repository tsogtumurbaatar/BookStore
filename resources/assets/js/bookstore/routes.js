import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './pages/App';
import WelcomePage from './pages/WelcomePage';
import BooksIndex from './pages/BooksIndex';
import BookForm from './pages/BookForm';
import CategoriesIndex from './pages/CategoriesIndex';
import CategoryForm from './pages/CategoryForm';
import LanguagesIndex from './pages/LanguagesIndex';
import LanguageForm from './pages/LanguageForm';



export default (
<Route path="/" component={App}>
 	<IndexRoute component={WelcomePage} />
  	<Route path="book" component={BooksIndex} />
  	<Route path="book/new" component={BookForm} />
  	<Route path="book/new/:bookid" component={BookForm} />
  	<Route path="category" component={CategoriesIndex} />
  	<Route path="category/new" component={CategoryForm} />
  	<Route path="category/new/:catid" component={CategoryForm} />
   	<Route path="language" component={LanguagesIndex} />
  	<Route path="language/new" component={LanguageForm} />
  	<Route path="language/new/:lngid" component={LanguageForm} />
  	<Route path="bookfront/:bookid" component={WelcomePage} /> 	
</Route>
);