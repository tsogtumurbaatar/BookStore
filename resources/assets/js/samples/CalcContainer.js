import React from 'react';
import {Calc} from './Calc';

export class CalcContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			mylogs : []
		}
		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(event)
	{
		const oper = document.getElementById('operator').value;
		var add_record = 0;

		if(oper.toString() == '+')
		{
			document.getElementById('result').innerHTML = Number(document.getElementById('elm1').value) + Number(document.getElementById('elm2').value);
			add_record = 1;
		}
		if(oper.toString() == '-')
		{
			document.getElementById('result').innerHTML = Number(document.getElementById('elm1').value) - Number(document.getElementById('elm2').value);
			add_record = 1;
		}
		if(oper.toString() == '*')
		{
			document.getElementById('result').innerHTML = Number(document.getElementById('elm1').value) * Number(document.getElementById('elm2').value);
			add_record = 1;
		}
		if(oper.toString() == '/')
		{
			document.getElementById('result').innerHTML = Number(document.getElementById('elm1').value) / Number(document.getElementById('elm2').value);
			add_record = 1;
		}

		if(add_record == 1)
		{
			const tmpstate = this.state.mylogs;
			const newlogs = {
				id : tmpstate.length + 1,
				text : document.getElementById('elm1').value +' '+ document.getElementById('operator').value +' '+ document.getElementById('elm2').value+' = '+ document.getElementById('result').innerHTML
			}
			tmpstate.push(newlogs);
			this.setState({mylogs:tmpstate});
		}
	}
	

	render()
	{
		return (
			<Calc 
			mylogs = {this.state.mylogs}
			handleClick = {this.handleClick}/>
		)
	}
} 
