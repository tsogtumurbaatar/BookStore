import React from 'react';
import {CategoryForm} from '../components/CategoryForm';
import {connect} from 'react-redux';
import { addCategory, addCategoryReset, fetchCategory, fetchCategoryReset, saveCategory, fetchCategories } from '../actions/categories';


const mapDispatchToProps = (dispatch) =>{
	return {
		resetMe:() => 						{ dispatch(addCategoryReset())},
		resetMeActive:() => 				{ dispatch(fetchCategoryReset())},
		handleAddEvent:(newcategory) => 	{ dispatch(addCategory(newcategory))},
		handleSaveEvent:(editedcategory) => { dispatch(saveCategory(editedcategory))},
		fetchCategory:(category_id) => 		{ dispatch(fetchCategory(category_id))}
	}
}


const mapStateToProps = (state, props) =>{
	return {
		categoriesToProps:state.category.newCategory,
		catidToProps:props.catid,
		activeCategoryToProps:state.category.activeCategory,
		updatedToProps :state.category.updated
	}
}

export const CategoryFormContainer =  connect( 
	mapStateToProps,
	mapDispatchToProps
	)(CategoryForm)