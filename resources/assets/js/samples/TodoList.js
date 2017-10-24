import React, {PropTypes} from 'react';


export const TodoList = (props) => {
	return(
		<div>
		<input type="text" id="newtodo" className="form-control" /><br/>
		<div className="row">	
			<div className="col-md-3"><input type="button" onClick={props.handleAddEvent} value="add Todo" className="btn btn-primary form-control" /></div>
			<div className="col-md-3"><input type="button" onClick={props.handleSaveEvent} value="Save Edit Todo" className="form-control btn btn-warning" /></div>
			<div className="col-md-3"><input type="button" onClick={props.fetchData} value="Fetch data" className="form-control btn btn-warning" /></div>
			<div className="col-md-3"><input type="button" onClick={props.getCheckEvent} value="Delete" className="form-control btn btn-danger" /></div>

		</div>
		<table className="table table-striped">
		<thead>
		<tr>
		<th>User List</th>
		<th>Show</th>
		<th>Edit</th>
		</tr>
		</thead>
		<tbody>
		{props.todos.map(todo =>(
			<tr key={todo.id}>
			<td>
			
    		<input type="checkbox" name="todochecks" value={todo.id}/>	{todo.book_name}
    		
			</td>
			<td><input type="button" className="btn btn-warning" onClick={ (e) => props.handleEditEvent(e,todo.id) } value="show" /></td>
			<td><input type="button" className="btn btn-info" onClick={ (e) => props.handleEditEvent(e,todo.id) } value="edit" /></td>
			</tr>
			)
		)
	}
	</tbody>
	</table>
	</div>
	)
}

TodoList.propTypes = {
	todos:PropTypes.arrayOf(PropTypes.shape({
		id:PropTypes.number.isRequired,
		book_name:PropTypes.string.isRequired
	}).isRequired).isRequired
}