import React from 'react';
import {LanguageForm} from '../components/LanguageForm';
import {connect} from 'react-redux';
import { addLanguage, addLanguageReset, fetchLanguage, fetchLanguageReset, saveLanguage, fetchLanguages } from '../actions/languages';


const mapDispatchToProps = (dispatch) =>{
	return {
		resetMe:() => 						{ dispatch(addLanguageReset())},
		resetMeActive:() => 				{ dispatch(fetchLanguageReset())},
		handleAddEvent:(lng) => 			{ dispatch(addLanguage(lng))},
		handleSaveEvent:(lng) => 			{ dispatch(saveLanguage(lng))},
		fetchLanguage:(lng_id) => 			{ dispatch(fetchLanguage(lng_id))}
	}
}


const mapStateToProps = (state, props) =>{
	return {
		lngidToProps:props.lngid,
		activeLngToProps:state.language.activeLng,
		newLngToProps:state.language.newLng,
	}
}

export const LanguageFormContainer =  connect( 
	mapStateToProps,
	mapDispatchToProps
	)(LanguageForm)