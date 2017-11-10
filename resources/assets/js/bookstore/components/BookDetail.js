import React from 'react';

var divStyle = {
	paddingBottom: 15
};



export class BookDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			book:{},
			showReview:''
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);
	}

	componentWillMount() {
		if(this.props.bookidToProps)
			this.props.fetchBook(this.props.bookidToProps);
	}

	
	componentWillReceiveProps(nextProps)
	{
		if(nextProps.activeBookToProps.book)
		{
			this.setState({book : nextProps.activeBookToProps.book})
		}
	}

	handleClick(event)
	{
		this.setState({showReview:1});
	}

	handleCloseClick(event)
	{
		this.setState({showReview:''});
	}

	render()
	{

		if(this.props.activeBookToProps.loading) {
			return <div><h2>Editing book</h2><h3>Loading...</h3><img id="imgloading" src="images/giphy.gif"/></div>      
		} else if(this.props.activeBookToProps.error) {
			return <div className="alert alert-danger">Error: {this.props.activeBookToProps.error.message}</div>
		}

		var images=[];
		if(this.state.book.book_img2!='images.jpg') images.push(<div className="col-md-4" key={Math.random()}><img src={this.state.book.book_img2} width="50"/></div>)
		if(this.state.book.book_img3!='images.jpg') images.push(<div className="col-md-4" key={Math.random()}><img src={this.state.book.book_img3} width="50"/></div>)
		if(this.state.book.book_img4!='images.jpg') images.push(<div className="col-md-4" key={Math.random()}><img src={this.state.book.book_img4} width="50"/></div>)

		return(
			<div className="row">
			<div className="col-md-4">
				<div className="col-md-12">
				<br/><img src={this.state.book.book_img1} width="250" style={divStyle} />
				</div>
				<div className="col-md-12">
				{images}
				</div>

			</div>
			<div className="col-md-8">

			<div className="col-md-12">
			<h2>{this.state.book.book_name}</h2>
			</div>

			<div className="col-md-12" style={divStyle}>
			by <b>{this.state.book.book_author}</b>
			</div>

			<div className="col-md-6" style={divStyle}>
			Price: {this.state.book.book_price1}$
			</div>

			<div className="col-md-6" style={divStyle}>
			Sale: {this.state.book.book_price2}$
			</div>

			<div className="col-md-12" style={divStyle}>
			Category: <b>{this.state.book.cat_name}</b>
			</div>

			<div className="col-md-12" style={divStyle}>
			Language: <b>{this.state.book.lng_name}</b>
			</div>

			<div className="col-md-12" style={divStyle}>
			<b>{this.state.book.book_motto}</b>
			</div>
			<div className="col-md-12" style={divStyle}>
			{this.state.book.book_desc}
			</div>

			<div className="col-md-12" style={divStyle}>
			ISBN: <b>{this.state.book.book_isbn}</b>
			</div>

			<div className="col-md-12" style={divStyle}>
			Publisher: <b>{this.state.book.book_publisher}</b>
			</div>

			</div>
			

			<div className="col-md-12">
			<input type="button" onClick={this.handleClick}  value="Write a customer review"/>
			</div>

			<div className="col-md-12" style={{display: this.state.showReview ? 'block' : 'none' }}>
			<input type="text" />
			<input type="button" onClick={this.handleCloseClick}  value="Close Div"/>
			
			</div>
			</div>
			)
	}


}