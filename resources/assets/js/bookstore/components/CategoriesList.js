import React from 'react';
import { Link } from 'react-router';


export class CategoriesList extends React.Component{
constructor(props) {
	super(props);
	this.getCheckEvent = this.getCheckEvent.bind(this);
	this.state = {
		categories : []
	}
	this.searchEventHandle = this.searchEventHandle.bind(this);
}

 componentWillMount() {
     this.props.fetchData();
     this.props.resetMe();
  }

  searchEventHandle(event)
  {
  	   var updatedList = this.props.categoriesToProps.categories;
    updatedList = updatedList.filter(function(item){
      		return item.cat_name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    		}
    );
    this.setState({categories: updatedList});
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
var result = confirm("Want to delete?");
	if (result) {
	var checkedBoxes = this.getCheckedBoxes("catchecks");
	if(checkedBoxes) this.props.handleDeleteEvent(checkedBoxes);
	else window.alert('Nothing selected');
	}
} 

render(){	
// const categories = this.props.categoriesToProps.categories;
const loading = this.props.categoriesToProps.loading;
const error = this.props.categoriesToProps.error;
const removedCategory = this.props.removedToProps.categories;



  if(loading) {
      return <div className="container"><h1>Categories</h1><h3>Loading...</h3><img src="images/giphy.gif"/></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

	return (
		<div className="container">
		<h2>Categories List : </h2>          
		<div className="row">
		<div className="col-md-4"><Link to="/category/new" className="form-control btn btn-primary">Add</Link></div>		
		<div className="col-md-4"><input type="button" onClick={this.props.fetchData} value="Fetch" className="form-control btn btn-primary" /></div>
		<div className="col-md-4"><input type="button" onClick={this.getCheckEvent} value="Delete" className="form-control btn btn-warning" /></div>
		</div>
		<br/>
		<div className="row">
		<div className="col-md-12">
		<input type="text" className="form-control" placeholder="Search" onChange={this.searchEventHandle}/>
		</div>
		</div>
		<br/>
		
		{removedCategory ? 'Categories removed':''}
		<table className="table">
		<thead>
		<tr>
		<th>ID</th>
		<th>Category Name</th>
		<th>Category Description</th>
		<th>Action</th>
		</tr>
		</thead>
		<tbody>
		{this.state.categories.map(category=>(
			<tr key={category.cat_id}>
			<td><input type="checkbox" name="catchecks" value={category.cat_id}/>{category.cat_id}</td>
			<td>{category.cat_name}</td>
			<td>{category.cat_desc}</td>
			<td><Link to={`/category/new/${category.cat_id}`} className="btn btn-info">Edit</Link></td>
			</tr>
			))}
		</tbody>
		</table>
		</div>
		)
}

}