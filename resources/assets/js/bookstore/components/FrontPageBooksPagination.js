import React from 'react';

export class FrontPageBooksPagination extends React.Component{
	render(){
		return(
			<div className="col-md-12">
			<nav className="text-center">
			<ul className="pagination">
			{this.props.pageNumbers.map((number) => (
				<li key={number} className="page-item">
				<a className="page-link" onClick={this.props.handleClick}  id={number}>	            
				{number}
				</a>
				</li>
				))}
			</ul>
			</nav>
			</div>
		
		)
	}
}
