import {combineReducers} from 'redux';
import {category} from './category_reducer';
import {book} from './book_reducer';



const rootReducer = combineReducers({
	category : category,
	book : book
})

export default rootReducer