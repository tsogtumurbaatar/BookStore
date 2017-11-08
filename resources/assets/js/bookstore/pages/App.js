import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
	render()
	{
		return(
			<div>
				<nav>
			      	<IndexLink to="/" activeClassName="active">Home</IndexLink>
			      	{" | "}
			      	<Link to="/book" activeClassName="active">Books</Link>
			      	{" | "}
			      	<Link to="/category" activeClassName="active">Category</Link>
			      	{" | "}
			      	<Link to="/category" activeClassName="active">Language</Link>
			      	{" | "}
			      	<Link to="/category" activeClassName="active">User Reviews</Link>
			    </nav>
    	<br/><br/>
			{this.props.children}
			</div>
			)
	}
}

App.propsTypes = {
	children:PropTypes.object.isRequired
};

export default App;