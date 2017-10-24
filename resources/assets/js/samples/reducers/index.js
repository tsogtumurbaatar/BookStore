import {combineReducers} from 'redux';
import {todos} from './todos';
import {setFilter} from './setFilter';



const todoApp = combineReducers({
	todos : todos,
	setFilter : setFilter
})

export default todoApp