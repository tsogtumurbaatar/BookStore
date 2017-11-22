import React from 'react';

var starStyle={
	color:	'#FFA500'
}

export class UserReviewsList extends React.Component{	
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			lngsPerPage: 5
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		this.setState({currentPage:Number(event.target.id)});
	}

	render(){
		const indexOfLastLng = this.state.currentPage * this.state.lngsPerPage;
		const indexOfFirstLng = indexOfLastLng - this.state.lngsPerPage;
		const currentLngs = this.props.reviews.slice(indexOfFirstLng, indexOfLastLng);

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(this.props.reviews.length / this.state.lngsPerPage); i++) {
			pageNumbers.push(i);
		}

		return(
			<div>			
			<div className="col-md-12">			
			{currentLngs.map((review)=>
				
					<div className="panel panel-info" key={review.review_id}>
					<div className="panel-heading">
					{review.review_score=='0'?(<span style={starStyle}><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
					{review.review_score=='1'?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
					{review.review_score=='2'?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
					{review.review_score=='3'?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
					{review.review_score=='4'?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
					{review.review_score=='5'?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span></span>):''}

					&nbsp;&nbsp;{review.review_title}</div>
					<div className="panel-body">
					<small>By Administator, on {review.created_at} </small><br/> 
					{review.review_body}</div>
					</div>
				)}
			</div>
			<div className="col-md-12">
			<nav className="text-center">
			<ul className="pagination">
			{pageNumbers.map((number) => (
				<li key={number} className="page-item">
				<a className="page-link" onClick={this.handleClick}  id={number}>	            
				{number}
				</a>
				</li>
				))}
			</ul>
			</nav>
			</div>
			</div>
			)

	}
}
