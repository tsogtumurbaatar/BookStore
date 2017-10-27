import React from 'react';
import {CategoryFormContainer} from '../containers/CategoryFormContainer';

class CategoryForm extends React.Component{
	
	render()
	{
		if(this.props.params.catid)
		return <CategoryFormContainer catid={this.props.params.catid}/>
		else
		return <CategoryFormContainer />

	}

}

export default CategoryForm;