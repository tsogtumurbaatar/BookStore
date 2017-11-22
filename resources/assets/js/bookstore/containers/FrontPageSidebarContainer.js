import React from 'react';
import {FrontPageSidebar} from '../components/FrontPageSidebar'; 
import {connect} from 'react-redux';
import { fetchBooks, removeBooks, removeBooksReset, filterAddBook } from '../actions/books';

const mapDispatchToProps = (dispatch) =>{
	return {

	}
}

const mapStateToProps = (state, props) =>{
	return {
		categoriesToProps: state.category.categoriesList.categories,
		lngsToProps: state.language.lngsList.lngs,
		catid : props.catid,
		lngid : props.lngid
	}
}

export default connect( 
	mapStateToProps,
	mapDispatchToProps
	)(FrontPageSidebar)
