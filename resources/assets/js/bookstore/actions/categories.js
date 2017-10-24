import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';


export function fetchCategories() {
	return (dispatch) => {
		return fetch('http://localhost/react_bookstore/public/api/category/fetch', { method: 'GET'})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(fetchCategoriesSuccess(json))
			}
			else{
				dispatch(fetchCategoriesFailure())
			}
		})
	}
}

export function fetchCategoriesSuccess(posts) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: posts
  };
}

export function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
}

