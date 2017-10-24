import * as types from './actions/index';
import {connect} from 'react-redux';
import {TodoListContainer} from './TodoListContainer';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchData:() => 				{ dispatch(types.itemsFetchData('http://localhost/redux/public/api/fetchbooks'))},
		handleAddEvent:(book) => 		{ dispatch(types.itemsAddData('http://localhost/redux/public/api/addbook', book));},
		handleDeleteEvent:(books) => 	{ dispatch(types.itemsDeleteData('http://localhost/redux/public/api/deletebooks',books));},
		handleEditEvent:(book) => 		{ dispatch(types.itemsUpdateData('http://localhost/redux/public/api/updatebook', book));},
	}
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      	return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) =>{
	return {
		todos:getVisibleTodos(state.todos, state.setFilter)
	}
}

export const TodoListContainerConnection =connect( 
	mapStateToProps,
	mapDispatchToProps
	)(TodoListContainer)