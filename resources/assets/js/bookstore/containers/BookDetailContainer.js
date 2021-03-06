import React from 'react';
import {BookDetail} from '../components/BookDetail'; 
import {connect} from 'react-redux';
import { fetchBook } from '../actions/books';
import { addCart } from '../actions/cartItems';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchBook:(book_id) => 		{ dispatch(fetchBook(book_id))},
		addCart:(book,qty) => 		{ dispatch(addCart(book, qty))}
	}
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
