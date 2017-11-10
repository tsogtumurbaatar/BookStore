import React from 'react';
import { Link } from 'react-router';

var divStyle = {
  paddingBottom: 15
};

export const FrontPageBook =(props)=>
(
	<div className="col-md-4" style={divStyle}>
	<div className="col-md-12">

	<img src={props.book.book_img1} width="150px" height="200px"/>
	</div>
	<div className="col-md-12">
	<Link to={`/bookfront/${props.book.book_id}`}> {props.book.book_name} </Link>
	</div>
	</div>
	)