import React from 'react';
import {LanguageFormContainer} from '../containers/LanguageFormContainer';

class LanguageForm extends React.Component{
	
	render()
	{
		if(this.props.params.lngid)
		return <LanguageFormContainer lngid={this.props.params.lngid}/>
		else
		return <LanguageFormContainer />

	}

}

export default LanguageForm;