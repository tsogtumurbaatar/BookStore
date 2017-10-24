import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';


class App extends React.Component {  
  render() {
    return (
      <div>
      <nav>
      <IndexLink to="/" 
        activeClassName="active">Home</IndexLink>
      	{" | "}
      	<Link to="/calc" activeClassName="active">Calc</Link>
    	</nav>
    	<br/><br/>
      
        {this.props.children}
    
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;  