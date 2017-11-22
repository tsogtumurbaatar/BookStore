import React from 'react';
import { hashHistory } from 'react-router';


export class LoginComponent extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			name:'tsog123@gmail.com',
			pass:'123456',
			result:'',
			token:''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onClickLogin = this.onClickLogin.bind(this);
		this.onClickDetail = this.onClickDetail.bind(this);
		this.onClickLogout = this.onClickLogout.bind(this);
	}

	onClickLogin(event){
		fetch('http://localhost/bookstore/public/login',{ method: 'POST',
			body: JSON.stringify({ email : this.state.name,
								   password:this.state.pass
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then( response => Promise.all([response, response.json()]))
		.then(([response, json]) =>{
			if(response.status === 200){
				this.setState({token: json.success.token});
				sessionStorage.setItem('jwtToken', json.success.token);
				sessionStorage.setItem('jwtUserName', json.success.username);
				hashHistory.push('/frontpage');
			
			}
			else{
				this.setState({result: json});
			}
		})

	}

	onClickDetail(event){
		 let token = sessionStorage.getItem('jwtToken');
		   if(!token || token === '') {
		    window.alert('Not token');
		    return;
		   }

		   let user = sessionStorage.getItem('jwtUserName');
		   	if(!user || user === '') {
		    window.alert('User not found');
		    return;
		   }
		   console.log(user);
		   window.alert(user);

	}

	onClickLogout(event){
		sessionStorage.removeItem('jwtToken');
		sessionStorage.removeItem('jwtUserName');
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	render()
	{
		return(
			<div>
			<input name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" />
			<input name="pass" value={this.state.pass} onChange={this.handleInputChange} className="form-control" />

			<input type="button" value="Login" className="form-control btn btn-success" onClick={this.onClickLogin} />
			
			Token : {this.state.token}<br/>
			<input type="button" value="Get Details" className="form-control btn btn-success" onClick={this.onClickDetail} />
			<input type="button" value="LogOut" className="form-control btn btn-success" onClick={this.onClickLogout} />


			</div>
			)
	}	
}
