
import {TodoList} from './TodoList';
import React from 'react';
import {Footer} from './Footer';


export class TodoListContainer extends React.Component{

constructor(props) {
	super(props);
	this.state = {
		editing_todo : -1,
	}	
	this.handleAddEvent = this.handleAddEvent.bind(this);
	this.handleEditEvent = this.handleEditEvent.bind(this);
	this.handleSaveEvent = this.handleSaveEvent.bind(this);
	this.handleCompletedEvent = this.handleCompletedEvent.bind(this);
	this.fetchData = this.fetchData.bind(this);
	this.getCheckEvent = this.getCheckEvent.bind(this);
}

handleAddEvent(event){
	const newbook = {
		"book_name" : document.getElementById('newtodo').value,
		"book_desc" : document.getElementById('newtodo').value,
		"cat_id" : 1
	}

	this.props.handleAddEvent(newbook);
	document.getElementById('newtodo').value = '';
}



handleEditEvent(event,data){
	document.getElementById('newtodo').value = this.props.todos.find(x=>x.id == data).book_name;	
	this.setState({editing_todo:data});
}

handleSaveEvent(event){
	const index_of_todo = this.state.editing_todo;
	if(index_of_todo != -1)
	{
		const newbook = {
		"id" : index_of_todo,
		"book_name" : document.getElementById('newtodo').value,
		"book_desc" : document.getElementById('newtodo').value,
		"cat_id" : 1
		}

		this.props.handleEditEvent(newbook);
		this.setState({editing_todo:-1});
	}
}

handleCompletedEvent(event,data) {
	if(this.props.todos.find(x=>x.id == data).completed == 1)
			this.props.handleToggleEvent(data,0);	
	else
			this.props.handleToggleEvent(data,1);	
}


getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  
  for (var i=0; i<checkboxes.length; i++) {
   
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }

  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

getCheckEvent(event) {
var checkedBoxes = this.getCheckedBoxes("todochecks");
var result = confirm("Want to delete?");
	if (result) {
    this.props.handleDeleteEvent(checkedBoxes);
	}
}

fetchData(){
	this.props.fetchData();
}

render()
{
	return (
 			<div>
 			<TodoList 
 				todos={this.props.todos}
				handleAddEvent = {this.handleAddEvent}
				handleEditEvent = {this.handleEditEvent}
				handleSaveEvent = {this.handleSaveEvent}
				handleCompletedEvent = {this.handleCompletedEvent}
				getCheckEvent = {this.getCheckEvent}
				fetchData = {this.fetchData} />	
			</div>
		)
}
} 






