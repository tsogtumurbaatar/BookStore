import React from 'react';
import {BooksList} from '../components/BooksList'; 
import {connect} from 'react-redux';
import { fetchBooks, removeBooks, removeBooksReset, filterAddBook } from '../actions/books';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchData:() => 					{ dispatch(fetchBooks())},
		resetMe:() => 						{ dispatch(removeBooksReset())},
		handleDeleteEvent:(books) => 		{ dispatch(removeBooks(books))},
		handleSearchEvent:(text)=>			{ dispatch(filterAddBook(text))}
	}
}


const searchEventHandle =(books, filter) =>{
		var updatedList = books;
		updatedList = updatedList.filter(function(item){
			return item.book_name.toLowerCase().search(filter.toLowerCase()) !== -1;
		});
		return updatedList
}


const mapStateToProps = (state) =>{
	return {
		booksToProps:searchEventHandle(state.book.booksList.books, state.book.filterBook),
		loadingToProps : state.book.booksList.loading,
		errorToProps : state.book.booksList.error,
		removedToProps:state.book.deletedBooks
	}
}

export const BooksListContainer = connect( 
	mapStateToProps,
	mapDispatchToProps
	)(BooksList)
