import React from 'react';
import {CategoriesList} from '../components/CategoriesList'; 
import {connect} from 'react-redux';
import { fetchCategories } from '../actions/categories';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchData:() => 				{ dispatch(fetchCategories())},
		handleAddEvent:(book) => 		{ dispatch(types.itemsAddData('http://localhost/redux/public/api/addbook', book));},
		handleDeleteEvent:(books) => 	{ dispatch(types.itemsDeleteData('http://localhost/redux/public/api/deletebooks',books));},
		handleEditEvent:(book) => 		{ dispatch(types.itemsUpdateData('http://localhost/redux/public/api/updatebook', book));},
	}
}


const mapStateToProps = (state) =>{
	return {
		categories:state.category.categoriesList
	}
}

export default connect( 
	mapStateToProps,
	mapDispatchToProps
	)(CategoriesList)
