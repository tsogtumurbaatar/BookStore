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
      return <div className="container"><h2>Add new category</h2><h3>Loading...</h3><img id="imgloading" src="images/giphy.gif"/></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    if(this.props.activeCategoryToProps.loading) {
      return <div className="container"><h2>Editing category</h2><h3>Loading...</h3><img id="imgloading" src="images/giphy.gif"/></div>      
    } else if(this.props.activeCategoryToProps.error) {
      return <div className="alert alert-danger">Error: {this.props.activeCategoryToProps.error.message}</div>
    }

		if(this.props.activeCategoryToProps.category)
			return (
			<div className="container">
			<h2>Categories edit : </h2>    
			{this.props.activeCategoryToProps.updated ? <div className="alert alert-success"><strong>Success!</strong> The category edited, ID - {this.props.activeCategoryToProps.category.cat_id}</div>:''}
			<div className="form-group">
			<label htmlFor="catname">Category name:</label>
			<input key={Math.random()} type="text" className="form-control" id="cat_name" defaultValue={this.props.activeCategoryToProps.category.cat_name}/>
			</div>
			<div className="form-group">
			<label htmlFor="catdesc">Category description:</label>
			<input key={Math.random()} type="text" className="form-control" id="cat_desc" defaultValue={this.props.activeCategoryToProps.category.cat_desc}/>
			</div>
			<div className="col-md-6">	
			<button type="submit" className="btn btn-primary form-control" onClick={()=>this.handleSaveEvent()}><span className="glyphicon glyphicon-ok"></span> Save Category</button>
			</div>
			<div className="col-md-6">	
		
			<Link to="/category" className="btn btn-warning form-control"><span className="glyphicon glyphicon-share"></span> Go back</Link>
			</div>
			</div>
			) 
		else
			return (
			<div className="container">
			<h2>Categories add : </h2>    
			{newCategory ? <div className="alert alert-success"><strong>Success!</strong> New category add, ID - {newCategory.cat_id}</div>:''}
			<div className="form-group">
			<label htmlFor="catname">Category name:</label>
			<input type="text" className="form-control" id="cat_name"/>
			</div>
			<div className="form-group">
			<label htmlFor="catdesc">Category description:</label>
			<input type="text" className="form-control" id="cat_desc" />
			</div>
			<div className="col-md-6">	
			<button type="submit" className="btn btn-primary form-control" onClick={()=>this.handleAddEvent()}><span className="glyphicon glyphicon-ok"></span> Add New Category</button>
			</div>
			<div className="col-md-6">	
		
			<Link to="/category" className="btn btn-warning form-control"><span className="glyphicon glyphicon-share"></span> Go back</Link>
			</div>
			</div>
			) 
	
}

}


