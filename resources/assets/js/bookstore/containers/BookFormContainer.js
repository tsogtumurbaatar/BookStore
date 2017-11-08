import React from 'react';
import {BookForm} from '../components/BookForm';
import {connect} from 'react-redux';
import { addBook, addBookReset, fetchBook, fetchBookReset, saveBook, fetchBooks } from '../actions/books';


const mapDispatchToProps = (dispatch) =>{
	return {
		resetMe:() => 						{ dispatch(addBookReset())},
		resetMeActive:() => 				{ dispatch(fetchBookReset())},
		handleAddEvent:(book) => 			{ dispatch(addBook(book))},
		handleSaveEvent:(book) => 			{ dispatch(saveBook(book))},
		fetchBook:(book_id) => 				{ dispatch(fetchBook(book_id))}
	}
}


const mapStateToProps = (state, props) =>{
	return {
		categoriesToProps:state.category.categoriesList,
		
		bookidToProps:props.bookid,
		activeBookToProps:state.book.activeBook,
		updatedToProps :state.category.updated,


	}
}

export const BookFormContainer =  connect( 
	mapStateToProps,
	mapDispatchToProps
	)(BookForm)