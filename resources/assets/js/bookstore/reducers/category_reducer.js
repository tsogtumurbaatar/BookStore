import * as types from '../actions/categories';
const initial_state = {
					categoriesList :{categories:[], error:null, loading:false},
					newCategory: {category:null, error:null, loading:false},
					activeCategory:{category:null, error:null, loading:false},
					deletedCategory:{category:null, error:null, loading:false}
					}


export const category = (state= initial_state, action) =>{
	let error;
	switch(action.type) {
		case types.FETCH_CATEGORIES:
		return [ ...state, categoriesList: {categories:[], error: null, loading: true} ]; 

		case types.FETCH_CATEGORIES_SUCCESS:
		return [ ...state, categoriesList: {categories: action.payload, error:null, loading: false} ];

		case types.FETCH_CATEGORIES_FAILURE:
    	error = action.payload;
   		return state;
    
    	case types.RESET_CATEGORIES:
    	return state;	


    default:
    return state
}
}		