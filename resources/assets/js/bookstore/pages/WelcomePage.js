import React from 'react';
import FrontPageBooksContainer from '../containers/FrontPageBooksContainer';
import BookDetailContainer from '../containers/BookDetailContainer';

class WelcomePage extends React.Component{

	render()
	{
		if(this.props.params.bookid)
		return <BookDetailContainer bookid={this.props.params.bookid}/>
		else
		{
			return <FrontPageBooksContainer 
							catid={this.props.location.query.catid?this.props.location.query.catid:'showall'}
							lngid={this.props.location.query.lngid?this.props.location.query.lngid:'showall'}
							/>			
		}
	}	
}

export default WelcomePage