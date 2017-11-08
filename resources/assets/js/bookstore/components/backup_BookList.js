import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'gbdreain';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dwomu2yfq/image/upload';


export class BooksList extends React.Component{

	constructor(props)
	{
		super(props);
		this.state = {
			files:[],
			imagePreviewUrl:[]
		}
		this.counter = 0; 
		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleDelete = this._handleDelete.bind(this);
	}


	_handleSubmit(e) {
		e.preventDefault();
		const files = this.state.files;

		for(let i=0; i<files.length; i++)
		{
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', files[i]);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				// this.setState({
				// 	uploadedFileCloudinaryUrl: response.body.secure_url
				// });
				console.log(response.body.secure_url);
			}
		});
		}

		console.log('handle uploading finished');
	}

	_handleDelete(e,value) {
		var result = confirm("Want to delete?");
		if (result) {
			e.preventDefault();
				if(typeof this.state.imagePreviewUrl[value] !='undefined'){
				const files = this.state.files;
				const imagePreviewUrl = this.state.imagePreviewUrl;
				files.splice(value,1);
				imagePreviewUrl.splice(value,1);
	
				this.setState({files: files,imagePreviewUrl: imagePreviewUrl});
				this.counter --;
			}	
	}	

	}

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		const files = this.state.files;
		const imagePreviewUrl = this.state.imagePreviewUrl;

		reader.onloadend = () => {
			if(this.counter == 4) {window.alert('Image upload limit exceeded'); return }
			this.counter ++;
			files.push(file);
			imagePreviewUrl.push(reader.result);
			this.setState({files: files,imagePreviewUrl: imagePreviewUrl});
		}
		reader.readAsDataURL(file);	
	}

	render()
	{
		console.log(this.state);
		
		var imagerows = [];
		for(let i=0; i<=3; i++){
			imagerows.push(<div className="col-md-3" key={Math.random()}><img src={this.state.imagePreviewUrl[i]? this.state.imagePreviewUrl[i]:'images/images.jpg' } onClick={(e)=>this._handleDelete(e,i)} width="200"/></div>);
		}


		return(
			<div>
			<h2>Books List : </h2>
			<p>This is the admin section</p>            
			<Link to="/books/new" activeClassName="active">Add new book</Link>
			<table className="table">
			<thead>
			<tr>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Email</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>John</td>
			<td>Doe</td>
			<td>john@example.com</td>
			</tr>
			<tr>
			<td>John</td>
			<td>Doe</td>
			<td>john@example.com</td>
			</tr>
			</tbody>
			</table>

			<div className="previewComponent">
			<form onSubmit={(e)=>this._handleSubmit(e)}>
			<input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
			<button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
			</form>

			<div className="row">
			{imagerows}
			</div>

			</div>


			</div>
			)
	}

}