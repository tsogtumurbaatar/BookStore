import React from 'react';

export const Calc = props =>
(
	<div className="row">
		<br/><br/>
		<div className="col-md-3">
		<input type="text" id="elm1" className="form-control" />
		</div>
		<div className="col-md-3">
		<input type="text" id="operator" className="form-control" />
		</div>
		<div className="col-md-3">
		<input type="text" id="elm2" className="form-control" />
		</div>
		<div className="col-md-3">
		<p id="result"></p>
		</div>
		<br/><br/><br/>
			<input type="button" onClick={props.handleClick} value="Execute" className="btn btn-primary form-control" />
		
		{props.mylogs.map(mylogs =>(
			<div className="form-control" key={mylogs.id}>{mylogs.text}</div>
			)
		)}
	</div>
)

