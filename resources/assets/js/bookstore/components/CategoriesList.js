import React from 'react';
import { Link } from 'react-router';


export class CategoriesList extends React.Component{
 componentWillMount() {
    this.props.fetchData();
  }	

render(){	
console.log(this.props);
const categories = this.props.categoriesToProps.categories;
const loading = this.props.categoriesToProps.loading;
const error = this.props.categoriesToProps.error;

  if(loading) {
      return <div className="container"><h1>Categories</h1><h3>Loading...</h3><img src="images/giphy.gif"/></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }


	return (
		<div className="container">
		<h2>Categories List : </h2>          
		<Link to="/category/new" activeClassName="active">Add new category</Link>
		<input type="button" onClick={this.props.fetchData} value="Fetch data" className="form-control btn btn-warning" />
		<table className="table">
		<thead>
		<tr>
		<th>Firstname</th>
		<th>Lastname</th>
		<th>Email</th>
		</tr>
		</thead>
		<tbody>
		{categories.map(category=>(
			<tr key={category.cat_id}>
			<td>{category.cat_id}</td>
			<td>{category.cat_name}</td>
			<td>{category.cat_desc}</td>
			</tr>
			))}
		</tbody>
		</table>
		</div>
		)
}

}