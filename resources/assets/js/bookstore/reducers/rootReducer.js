import {combineReducers} from 'redux';
import {category} from './category_reducer';
import {language} from './language_reducer';
import {book} from './book_reducer';



const rootReducer = combineReducers({
	category : category,
	language : language,	
	book : book
})

export default rootReducer