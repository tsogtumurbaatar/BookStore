import React from 'react';
import {BookFormContainer} from '../containers/BookFormContainer';

class BookForm extends React.Component{
	
	render()
	{
		if(this.props.params.bookid)
		return <BookFormContainer bookid={this.props.params.bookid}/>
		else
		return <BookFormContainer />
	}

}

export default BookForm;