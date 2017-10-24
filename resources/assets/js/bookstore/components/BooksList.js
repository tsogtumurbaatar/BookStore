import React from 'react';
import { Link } from 'react-router';

export class BooksList extends React.Component{
	render()
	{
		return(
			<div className="container">
			<h2>Books List : </h2>
			<p>This is the admin section</p>            
			<Link to="/books/new" activeClassName="active">Add new book</Link>
			<table className="table">
			<thead>
			<tr>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Email</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>John</td>
			<td>Doe</td>
			<td>john@example.com</td>
			</tr>
			<tr>
			<td>John</td>
			<td>Doe</td>
			<td>john@example.com</td>
			</tr>
			</tbody>
			</table>
			</div>
			)
	}

}