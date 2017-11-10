import React from 'react';
import {BookDetail} from '../components/BookDetail'; 
import {connect} from 'react-redux';
import { fetchBook } from '../actions/books';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchBook:(book_id) => 				{ dispatch(fetchBook(book_id))}
	}
}


const searchEventHandle =(books, filter) =>{
		var updatedList = books;
		updatedList = updatedList.filter(function(item){
			if(item.book_name !=null)
			return item.book_name.toLowerCase().search(filter.toLowerCase()) !== -1;
		else
			return item.book_name;
		});
		return updatedList
}


const mapStateToProps = (state, props) =>{
	return {
		bookidToProps:props.bookid,
		activeBookToProps:state.book.activeBook
	}
}

export default connect( 
	mapStateToProps,
	mapDispatchToProps
	)(BookDetail)
