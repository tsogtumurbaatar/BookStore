import React from 'react';
import {CategoriesList} from '../components/CategoriesList'; 
import {connect} from 'react-redux';
import { fetchCategories, removeCategories, removeCategoriesReset } from '../actions/categories';

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchData:() => 					{ dispatch(fetchCategories())},
		resetMe:() => 						{ dispatch(removeCategoriesReset())},
		handleDeleteEvent:(categories) => 	{ dispatch(removeCategories(categories))},
		handleEditEvent:(category) => 		{ dispatch(types.itemsUpdateData('http://localhost/redux/public/api/updatebook', book));},
	}
}


const mapStateToProps = (state) =>{
	return {
		categoriesToProps:state.category.categoriesList,
		removedToProps:state.category.deletedCategories
	}
}

export default connect( 
	mapStateToProps,
	mapDispatchToProps
	)(CategoriesList)
