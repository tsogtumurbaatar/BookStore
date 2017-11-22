import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './pages/App';
import WelcomePage from './pages/WelcomePage';
import IndexPage from './pages/IndexPage';
import Sidebar from './pages/Sidebar';
import BooksIndex from './pages/BooksIndex';
import BookForm from './pages/BookForm';
import CategoriesIndex from './pages/CategoriesIndex';
import CategoryForm from './pages/CategoryForm';
import LanguagesIndex from './pages/LanguagesIndex';
import LanguageForm from './pages/LanguageForm';
import UserCartDetailContainer from './containers/UserCartDetailContainer';
import SignInFormContainer from './containers/SignInFormContainer';



export default (
  <Route path="/" component={App}>
  <IndexRoute components={IndexPage} />
  <Route path="/frontpage" components={{main:WelcomePage, sidebar:Sidebar}} >
      <Route path="/frontpage/:bookid" components={{main:WelcomePage, sidebar:Sidebar}} />     
  </Route> 
  <Route path="/book" component={BooksIndex} />
  <Route path="/book/new" component={BookForm} />
  <Route path="/book/new/:bookid" component={BookForm} />
  <Route path="/category" component={CategoriesIndex} />
  <Route path="/category/new" component={CategoryForm} />
  <Route path="/category/new/:catid" component={CategoryForm} />
  <Route path="/language" component={LanguagesIndex} />
  <Route path="/language/new" component={LanguageForm} />
  <Route path="/language/new/:lngid" component={LanguageForm} />
  <Route path="/cart" component={UserCartDetailContainer} />
  <Route path="/login" component={SignInFormContainer} />
  
  </Route>
  );