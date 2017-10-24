import * as types from '../actions/categories';

export const category = (state= [], action) =>{
	let error;
	switch(action.type) {
		case types.FETCH_CATEGORIES:
		return state; 

		case types.FETCH_CATEGORIES_SUCCESS:
		return  action.payload;

		case types.FETCH_CATEGORIES_FAILURE:
    	error = action.payload;
   		return state;
    
    	case types.RESET_CATEGORIES:
    	return state;	


    default:
    return state
}
}		