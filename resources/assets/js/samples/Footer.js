import React, {PropTypes} from 'react';

export const Footer = props => {
	return(
		<div>
		SHOW&nbsp;&nbsp;&nbsp;&nbsp;
		<span className={props.filter=='SHOW_ALL' ? 'btn':"btn btn-primary"} 
		onClick={()=> props.handleFilteredEvent('SHOW_ALL')}>All</span>&nbsp;&nbsp;
		<span className={props.filter=='SHOW_COMPLETED' ? 'btn':"btn btn-primary"}
		onClick={()=> props.handleFilteredEvent('SHOW_COMPLETED')}>completed</span>&nbsp;&nbsp;
		<span className={props.filter=='SHOW_ACTIVE' ? 'btn':"btn btn-primary"}
		onClick={()=> props.handleFilteredEvent('SHOW_ACTIVE')}>active</span>&nbsp;&nbsp;
		</div>
	)
}

Footer.propTypes = {
	filter:PropTypes.string.isRequired
}
