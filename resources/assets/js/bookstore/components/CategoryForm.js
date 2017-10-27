import React from 'react';
import { Link } from 'react-router';

export class CategoryForm extends React.Component{
	constructor(props) {
		super(props);
	}

	componentWillMount() {
    this.props.resetMe();
    this.props.resetMeActive();

    if(this.props.catidToProps)
    	this.props.fetchCategory(this.props.catidToProps);
  	}

  	handleSaveEvent(event)
	{
	if(this.props.catidToProps)
		{
		const newcategory = {
			"cat_id" : this.props.catidToProps,
			"cat_name" : document.getElementById('cat_name').value,
			"cat_desc" : document.getElementById('cat_desc').value
			}
		this.props.handleSaveEvent(newcategory);
		}	
	}


	handleAddEvent(event)
	{
		const newcategory = {
		"cat_name" : document.getElementById('cat_name').value,
		"cat_desc" : document.getElementById('cat_desc').value
		}
	this.props.handleAddEvent(newcategory);	
	}

	render()
	{
	const newCategory = this.props.categoriesToProps.category;
	const loading = this.props.categoriesToProps.loading;
	const error = this.props.categoriesToProps.error;	

	if(loading) {
      return <div className="container"><h1>Add New Category</h1><h3>Loading...</h3><img src="images/giphy.gif"/></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    if(this.props.activeCategoryToProps.loading) {
      return <div className="container"><h1>Editing Category</h1><h3>Loading...</h3><img src="images/giphy.gif"/></div>      
    } else if(this.props.activeCategoryToProps.error) {
      return <div className="alert alert-danger">Error: {this.props.activeCategoryToProps.error.message}</div>
    }

		if(this.props.activeCategoryToProps.category)
			return (
			<div>
			{this.props.activeCategoryToProps.updated ? 'Edited successfully ID : '+ this.props.activeCategoryToProps.category.cat_id:''}
			<div className="form-group">
			<label htmlFor="catname">Category name:</label>
			<input key={Math.random()} type="text" className="form-control" id="cat_name" defaultValue={this.props.activeCategoryToProps.category.cat_name}/>
			</div>
			<div className="form-group">
			<label htmlFor="catdesc">Category description:</label>
			<input key={Math.random()} type="text" className="form-control" id="cat_desc" defaultValue={this.props.activeCategoryToProps.category.cat_desc}/>
			</div>
			<div className="col-md-6">	
			<button type="submit" className="btn btn-primary form-control" onClick={()=>this.handleSaveEvent()}>Save Category</button>
			</div>
			<div className="col-md-6">	
		
			<Link to="/category" className="btn btn-warning form-control">Go back</Link>
			</div>
			</div>
			) 
		else
			return (
			<div>
			{newCategory ? 'Added successfully ID : '+newCategory.cat_id:''}
			<div className="form-group">
			<label htmlFor="catname">Category name:</label>
			<input type="text" className="form-control" id="cat_name"/>
			</div>
			<div className="form-group">
			<label htmlFor="catdesc">Category description:</label>
			<input type="text" className="form-control" id="cat_desc" />
			</div>
			<div className="col-md-6">	
			<button type="submit" className="btn btn-primary form-control" onClick={()=>this.handleAddEvent()}>Add New Category</button>
			</div>
			<div className="col-md-6">	
		
			<Link to="/category" className="btn btn-warning form-control">Go back</Link>
			</div>
			</div>
			) 
	
}

}


