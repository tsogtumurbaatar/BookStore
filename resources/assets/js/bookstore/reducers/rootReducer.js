import {combineReducers} from 'redux';
import {todos} from './todos';
import {setFilter} from './setFilter';
import {category} from './category_reducer';



const rootReducer = combineReducers({
	todos : todos,
	setFilter : setFilter,
	category : category
})

export default rootReducer