export const addTodo = (book_name,book_id) => {
	return {
		type:'ADD_TODO',
		id: book_id,
		book_name: book_name
	}
}

export const removeTodo = (id) => {
	return {
		type:'REMOVE_TODO',
		id: id
	}
}

export const updateTodo = (id,book_name) =>{
	return {
		type:'UPDATE_TODO',
		id: id,
		book_name:book_name
	}
}

export const changeSetFilter = (filter) =>{
	return {
		type:'CHANGE_FILTER',
		filter:filter
	}
}

function fetchPostsRequest(){
	return {
		type: "FETCH_REQUEST"
	}
}

function fetchPostsSuccess(payload) {
	return {
		type: "FETCH_SUCCESS",
		payload
	}
}

function fetchPostsError() {
	return {
		type: "FETCH_ERROR"
	}
}


export function itemsFetchData(url) {
	return (dispatch) => {
		dispatch(fetchPostsRequest());
		return fetch(url, { method: 'GET'})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				dispatch(fetchPostsSuccess(json))
			}
			else{
				dispatch(fetchPostsError())
			}
		})
	}
}

export function itemsDeleteData(url, ids) {
	return (dispatch) => {
		return fetch(url, { method: 'POST',
			body: JSON.stringify({ ids : ids}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				for (var i=0; i<ids.length; i++) {
					dispatch(removeTodo(ids[i]));
				}	
			}
			else{
				dispatch(fetchPostsError())
			}
		})
	}
}

export function itemsAddData(url, book) {
	return (dispatch) => {
		return fetch(url, { method: 'POST',
			body: JSON.stringify({ book_name : book.book_name,
				book_desc : book.book_desc,
				cat_id : book.cat_id	
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				var newid = json.id;
				dispatch(addTodo(book.book_name,newid))
			}
			else{
				dispatch(fetchPostsError())
			}
		})
	}
}

export function itemsUpdateData(url, book) {
	return (dispatch) => {
		return fetch(url, { method: 'POST',
			body: JSON.stringify({ id : book.id,
				book_name : book.book_name,
				book_desc : book.book_desc,
				cat_id : book.cat_id	
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				var newid = json.id;
				dispatch(updateTodo(book.id, book.book_name))
			}
			else{
				dispatch(fetchPostsError())
			}
		})
	}
}

