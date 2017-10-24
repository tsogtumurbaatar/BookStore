import {connect} from 'react-redux';
import React from 'react';
import * as types from './actions/index';
import {Footer} from './Footer';

export class FooterContainer extends React.Component{
constructor(props) {
		super(props);
		this.handleFilteredEvent = this.handleFilteredEvent.bind(this);
	}

handleFilteredEvent(data){
	this.props.changeSetFilterEvent(data);
}

render(){
		return(
			<Footer 
				handleFilteredEvent = {this.handleFilteredEvent}
				filter = {this.props.setFilter}
				/>
		)
	}

}

const mapDispatchToProps = (dispatch) =>{
	return {
		changeSetFilterEvent:(text) => { dispatch(types.changeSetFilter(text));}
	}
}

const mapStateToProps = (state) =>{
	return {
		setFilter : state.setFilter
	}
}

export const FooterContainerConnection =connect( 
	mapStateToProps,
	mapDispatchToProps
	)(FooterContainer)


