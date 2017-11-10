import React from 'react';
import {FrontPageBook} from './FrontPageBook';

var divStyle = {
	paddingBottom: 15
};


export class FrontPageBooks extends React.Component{
	constructor(props)
	{
		super(props);
		this.searchEventHandle = this.searchEventHandle.bind(this);
	}

	searchEventHandle(event)
	{
		this.props.handleSearchEvent(event.target.value);
	}


	render(){
		const books = this.props.booksToProps;
		const loading = this.props.loadingToProps;
		const error = this.props.errorToProps;

		if(loading) {
			return <div><h2>Books list : </h2><h3>Loading...</h3><img id="imgloading" src="images/giphy.gif"/></div>      
		} else if(error) {
			return <div className="alert alert-danger">Error: {error.message}</div>
		} 


		return(
			<div className="row">

			<div className="col-md-12" style={divStyle}>
			<input type="text" className="form-control" placeholder="Search" onChange={this.searchEventHandle}/>
			</div>

			{books.map((book)=>
				<FrontPageBook key={book.book_id} book={book} />
				)
		}
		
		</div>
		)
	}
}
