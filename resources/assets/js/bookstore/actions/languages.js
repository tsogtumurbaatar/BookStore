export const FETCH_LANGUAGES = 'FETCH_LANGUAGES';
export const FETCH_LANGUAGES_SUCCESS = 'FETCH_LANGUAGES_SUCCESS';
export const FETCH_LANGUAGES_FAILURE = 'FETCH_LANGUAGES_FAILURE';
export const RESET_LANGUAGES = 'RESET_LANGUAGES';

export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const ADD_LANGUAGE_SUCCESS = 'ADD_LANGUAGE_SUCCESS';
export const ADD_LANGUAGE_FAILURE = 'ADD_LANGUAGE_FAILURE';
export const RESET_ADD_LANGUAGE = 'RESET_ADD_LANGUAGE';

export const REMOVE_LANGUAGES = 'REMOVE_LANGUAGES';
export const REMOVE_LANGUAGES_SUCCESS = 'REMOVE_LANGUAGES_SUCCESS';
export const REMOVE_LANGUAGES_FAILURE = 'REMOVE_LANGUAGES_FAILURE';
export const RESET_REMOVE_LANGUAGES = 'RESET_REMOVE_LANGUAGES';

export const FETCH_LANGUAGE = 'FETCH_LANGUAGE';
export const FETCH_LANGUAGE_SUCCESS = 'FETCH_LANGUAGE_SUCCESS';
export const FETCH_LANGUAGE_FAILURE = 'FETCH_LANGUAGE_FAILURE';
export const RESET_FETCH_LANGUAGE = 'RESET_LANGUAGE';

export const SAVE_LANGUAGE = 'SAVE_LANGUAGE';
export const SAVE_LANGUAGE_SUCCESS = 'SAVE_LANGUAGE_SUCCESS';
export const SAVE_LANGUAGE_FAILURE = 'SAVE_LANGUAGE_FAILURE';
export const RESET_SAVE_LANGUAGE = 'RESET_SAVE_LANGUAGE';

export const FILTER_ADD_LANGUAGE = 'FILTER_ADD_LANGUAGE';

export function filterAddLanguage(text) {
  return {
    type: FILTER_ADD_LANGUAGE,
    text:text
  };
}

export function fetchLanguages() {
	return (dispatch) => {
		dispatch(fetchLanguagesStart())
		return fetch('http://localhost/bookstore/public/api/lng/fetch', { method: 'GET'})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(fetchLanguagesSuccess(json))
			}
			else{
				dispatch(fetchLanguagesFailure())
			}
		})
	}
}

export function fetchLanguagesStart() {
  return {
    type: FETCH_LANGUAGES
  };
}

export function fetchLanguagesSuccess(posts) {
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    payload: posts
  };
}

export function fetchLanguagesFailure(error) {
  return {
    type: FETCH_LANGUAGES_FAILURE,
    payload: error
  };
}

export function addLanguage(lng) {
	return (dispatch) => {
		dispatch(addLanguageStart())
		return fetch('http://localhost/bookstore/public/api/lng/add', { method: 'POST',
			body: JSON.stringify({ lng_name : lng.lng_name,
								   lng_motto:lng.lng_motto,	
								   lng_desc : lng.lng_desc,
								   lng_isbn : lng.lng_isbn,
								   lng_publisher : lng.lng_publisher,
								   lng_author : lng.lng_author,
								   lng_price1 : lng.lng_price1,
								   lng_price2 : lng.lng_price2,
								   cat_id : lng.cat_id,
								   lng_id : lng.lng_id,
								   lng_img1 : lng.lng_img1,
								   lng_img2 : lng.lng_img2,
								   lng_img3 : lng.lng_img3,
								   lng_img4 : lng.lng_img4
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(addLanguageSuccess(json));
				dispatch(fetchLanguages());
			}
			else{
				dispatch(addLanguageFailure())
			}
		})
	}
}

export function addLanguageStart() {
  return {
    type: ADD_LANGUAGE
  };
}

export function addLanguageSuccess(posts) {
  return {
    type: ADD_LANGUAGE_SUCCESS,
    payload: posts
  };
}

export function addLanguageFailure(error) {
  return {
    type: ADD_LANGUAGE_FAILURE,
    payload: error
  };
}

export function addLanguageReset() {
  return {
    type: RESET_ADD_LANGUAGE
  };
}

export function removeLanguages(lng_ids) {
	return (dispatch) => {
		dispatch(removeLanguagesStart())
		return fetch('http://localhost/bookstore/public/api/lng/remove', { method: 'POST',
			body: JSON.stringify({ lng_ids : lng_ids	
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(removeLanguagesSuccess(json));
				dispatch(fetchLanguages());
			}
			else{
				dispatch(removeLanguagesFailure())
			}
		})
	}
}

export function removeLanguagesStart() {
  return {
    type: REMOVE_LANGUAGES
  };
}

export function removeLanguagesSuccess(posts) {
  return {
    type: REMOVE_LANGUAGES_SUCCESS,
    payload: posts
  };
}

export function removeLanguagesFailure(error) {
  return {
    type: REMOVE_LANGUAGES_FAILURE,
    payload: error
  };
}

export function removeLanguagesReset() {
  return {
    type: RESET_REMOVE_LANGUAGES
  };
}

export function fetchLanguage(lngid) {
	return (dispatch) => {
		dispatch(fetchLanguageStart())
		return fetch('http://localhost/bookstore/public/api/lng/fetch/'+lngid, { method: 'GET'})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(fetchLanguageSuccess(json))
			}
			else{
				dispatch(fetchLanguageFailure())
			}
		})
	}
}

export function fetchLanguageStart() {
  return {
    type: FETCH_LANGUAGE
  };
}

export function fetchLanguageSuccess(posts) {
  return {
    type: FETCH_LANGUAGE_SUCCESS,
    payload: posts
  };
}

export function fetchLanguageFailure(error) {
  return {
    type: FETCH_LANGUAGE_FAILURE,
    payload: error
  };
}

export function fetchLanguageReset() {
  return {
    type: RESET_FETCH_LANGUAGE
  };
}

export function saveLanguage(lng) {
	return (dispatch) => {
		dispatch(saveLanguageStart())
		return fetch('http://localhost/bookstore/public/api/lng/save', { method: 'POST',
			body: JSON.stringify({  lng_id : lng.lng_id,
									lng_name : lng.lng_name,
								   lng_motto:lng.lng_motto,	
								   lng_desc : lng.lng_desc,
								   lng_isbn : lng.lng_isbn,
								   lng_publisher : lng.lng_publisher,
								   lng_author : lng.lng_author,
								   lng_price1 : lng.lng_price1,
								   lng_price2 : lng.lng_price2,
								   cat_id : lng.cat_id,
								   lng_id : lng.lng_id,
								   lng_img1 : lng.lng_img1,
								   lng_img2 : lng.lng_img2,
								   lng_img3 : lng.lng_img3,
								   lng_img4 : lng.lng_img4
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(saveLanguageSuccess(json));
				dispatch(fetchLanguages());
			}
			else{
				dispatch(saveLanguageFailure())
			}
		})
	}
}

export function saveLanguageStart() {
  return {
    type: SAVE_LANGUAGE
  };
}

export function saveLanguageSuccess(posts) {
  return {
    type: SAVE_LANGUAGE_SUCCESS,
    payload: posts
  };
}

export function saveLanguageFailure(error) {
  return {
    type: SAVE_LANGUAGE_FAILURE,
    payload: error
  };
}

export function saveLanguageReset() {
  return {
    type: RESET_SAVE_LANGUAGE
  };
}