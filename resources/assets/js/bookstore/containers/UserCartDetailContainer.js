import React from 'react';
import {connect} from 'react-redux';
import { removeCart } from '../actions/cartItems';
import { Link, hashHistory } from 'react-router';

const mapDispatchToProps = (dispatch) =>{
	return {
		removeCart:(item_id) => { dispatch(removeCart(item_id))}
	}
}


const mapStateToProps = (state) =>{
	return {
		cartItemsToProps:state.cartItem
	}
}

var divStyle = {
	float:'right'
};

var styles = {
	color:'red',
	fontWeight:'bold'
};

var divStyle1 = {
  paddingBottom: 5
};

class UserCartDetail extends React.Component{
	render()
	{
		var header = '';
		if(this.props.cartItemsToProps.length!=0)
			header = (<div className="row" style={divStyle1}>
				<div className="col-md-8 text-center"><b>Book Name</b></div>
				<div className="col-md-1 text-center"><b>QTY</b></div>
				<div className="col-md-1 text-center"><b>Price</b></div>
				<div className="col-md-1 text-center"><b>Summary</b></div>
				<div className="col-md-1 text-center"><b>Delete</b></div>
				</div>
			);
		var qty =0 ,sum = 0;
		if(this.props.cartItemsToProps.length!=0)
		{
			for(var i=0; i<this.props.cartItemsToProps.length; i++)
				{
					qty = qty + this.props.cartItemsToProps[i].qty;
					sum = sum + this.props.cartItemsToProps[i].qty * this.props.cartItemsToProps[i].book.book_price2;
				}	
		}

		var footer = '';
		if(this.props.cartItemsToProps.length!=0)
			footer = (<div className="row" style={divStyle1}>
				<div className='span12 col-md-12'><hr/></div>
				<div className="col-md-8 text-center"><b>Summary</b></div>
				<div className="col-md-2 text-center"><b>{qty} items</b></div>
				<div className="col-md-2 text-center"><b>${sum}</b></div>
				<div className="col-md-12">&nbsp;</div>

				<div className="col-md-6"><button type="button" className="btn btn-info form-control"  onClick={()=>hashHistory.goBack()}><span className="glyphicon glyphicon-circle-arrow-left"></span> Go Back</button></div>
				<div className="col-md-6"><button type="button" className="btn btn-success form-control"  onClick={this.onClickAddCart}><span className="glyphicon glyphicon-usd"></span> Make the Payment</button></div>
				</div>
			);

		return (
			<div className="panel panel-info">
			<div className="panel-heading"><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart (<b>{this.props.cartItemsToProps.length}</b> items)</div>
			
			<div className="panel-body">
			{this.props.cartItemsToProps.length==0?<a>The cart is empty</a>:''}
	
			
			{header}
			{this.props.cartItemsToProps.map((item)=>(
				<div className="row" key={item.id} style={divStyle1}>
				<div className="col-md-2 text-center"><Link to={`/frontpage/${item.book.book_id}`}><img src={item.book.book_img1} width="75px" /></Link></div>
				<div className="col-md-6"><Link to={`/frontpage/${item.book.book_id}`}> {item.book.book_name}</Link></div>
				<div className="col-md-1 text-center">{item.qty}</div>
				<div className="col-md-1 text-center">${item.book.book_price2}</div>
				<div className="col-md-1 text-center">${item.qty*item.book.book_price2} </div>
				
				<div className="col-md-1"><a><span className="glyphicon glyphicon-remove" style={styles} onClick={()=>this.props.removeCart(item.id)}></span></a>
				</div>
				</div>
				)
			)}	
			{footer}
			</div>
			</div>

			)
	}
}

export default connect( 
	mapStateToProps,
	mapDispatchToProps
	)(UserCartDetail)