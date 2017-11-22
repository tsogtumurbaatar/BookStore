import React from 'react';
import { Link } from 'react-router';

var divStyle = {
  paddingBottom: 15
};

var starStyle={
	color:	'#FFA500'
}

export const FrontPageBook =(props)=>
(
	<div className="col-md-4" style={divStyle}>
	<div className="col-md-12">
	<Link to={`/frontpage/${props.book.book_id}`}>
	<img src={props.book.book_img1} width="150px" height="200px"/>
	</Link>
	</div>
	<div className="col-md-12">
	<Link to={`/frontpage/${props.book.book_id}`}> {props.book.book_name} </Link>
	</div>
	<div className="col-md-12">
	{(props.book.book_point>=0)&&(props.book.book_point <=0.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
	{(props.book.book_point>=0.51)&&(props.book.book_point <=1.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
	{(props.book.book_point>=1.51)&&(props.book.book_point <=2.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
	{(props.book.book_point>=2.51)&&(props.book.book_point <=3.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
	{(props.book.book_point>=3.51)&&(props.book.book_point <=4.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span></span>):''}
	{(props.book.book_point>=4.51)&&(props.book.book_point <=5.50)?(<span style={starStyle}><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span></span>):''}
	&nbsp;&nbsp;<small>({props.book.book_review_count} reviews)</small>
	</div>
	</div>
	)