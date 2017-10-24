import React from 'react';
import { Link } from 'react-router';


export const CategoriesList = props => {
console.log(props);
	return (
		<div className="container">
		<h2>Categories List : </h2>          
		<Link to="/category/new" activeClassName="active">Add new category</Link>
		<input type="button" onClick={props.fetchData} value="Fetch data" className="form-control btn btn-warning" />
		<table className="table">
		<thead>
		<tr>
		<th>Firstname</th>
		<th>Lastname</th>
		<th>Email</th>
		</tr>
		</thead>
		<tbody>
		{props.categories.map(category=>(
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