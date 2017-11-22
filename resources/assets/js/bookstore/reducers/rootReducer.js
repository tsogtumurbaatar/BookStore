import {combineReducers} from 'redux';
import {category} from './category_reducer';
import {language} from './language_reducer';
import {book} from './book_reducer';
import {review} from './review_reducer';
import {cartItem} from './cartItem_reducer';
import {user} from './user_reducer';



const rootReducer = combineReducers({
	category : category,
	language : language,	
	book : book,
	review : review,
	cartItem : cartItem,
	user : user
})

export default rootReducer