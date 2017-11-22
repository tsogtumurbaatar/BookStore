import React from 'react';
import {FrontPageBook} from './FrontPageBook';
import {FrontPageFilterBar} from './FrontPageFilterBar';
import {FrontPageBooksPagination} from './FrontPageBooksPagination';

var divStyle = {
	paddingBottom: 15
};


export class FrontPageBooks extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			currentPage: 1,
			booksPerPage: 9
			}
		this.searchEventHandle = this.searchEventHandle.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	searchEventHandle(event)
	{
		this.props.handleSearchEvent(event.target.value);
	}

	handleClick(event){
		this.setState({currentPage:Number(event.target.id)});
	}

	render(){
		const books = this.props.booksToProps;
		const loading = this.props.booksloadingToProps;
		const error = this.props.bookserrorToProps;

		const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
		const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
		const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(books.length / this.state.booksPerPage); i++) {
			pageNumbers.push(i);
		}

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

			<FrontPageFilterBar
				catid = {this.props.catid}
				lngid = {this.props.lngid}
				categories = {this.props.categories}
				lngs = {this.props.lngs} 
				/>

			{currentBooks.map((book)=>
				<FrontPageBook key={book.book_id} book={book} />
			)}

			<FrontPageBooksPagination 
				pageNumbers = {pageNumbers}
				handleClick= {this.handleClick}
				/>
			</div>
		)
	}
}
