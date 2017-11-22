import React from 'react';
import { hashHistory } from 'react-router';

export class SignInForm extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			email:'tsog123@gmail.com',
			pass:'123456',
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onClickLogin = this.onClickLogin.bind(this);
	}

	onClickLogin(event){
		const newInput ={
			email:this.state.email,
			password:this.state.pass
		}
		this.props.signInUser(newInput);
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	render()
	{
		if(this.props.user.loading) {
			return <div><h2>Logging to system</h2><h3>Loading...</h3><img id="imgloading" src="images/giphy.gif"/></div>      
		} else if(this.props.user.error) {
			return <div className="alert alert-danger">Error: {this.props.user.error.message}</div>
		}

		return(
			<div className="col-md-6 col-md-offset-3">
			<br/><br/><br/>
			{this.props.user.user?this.props.user.user.name:''}
			<div className="form-group col-md-12">
			<label htmlFor="Email">Email :</label>
			<input name="email" type="text "value={this.state.email || ''} onChange={this.handleInputChange} className="form-control" />
			</div>
			<div className="form-group col-md-12">
			<label htmlFor="Password">Password :</label>
			<input name="pass" type="password" value={this.state.pass || ''} onChange={this.handleInputChange} className="form-control" />
			</div>

			<div className="col-md-6"><button type="button" className="form-control btn btn-success" onClick={this.onClickLogin} ><span className="glyphicon glyphicon-log-in"></span> Log In </button></div>
			<div className="col-md-6"><button type="button" className="btn btn-info form-control"  onClick={()=>hashHistory.goBack()}><span className="glyphicon glyphicon-circle-arrow-left"></span> Go Back</button></div>
			</div>
			)
	}	
}
