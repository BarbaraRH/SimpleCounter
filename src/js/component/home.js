import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2" />
					<div className="col-md-1 m-1 border border-white text-center rounded bg-secondary text-white">
						<h1>
							<i className="far fa-clock" />
						</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>0</h1>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		);
	}
}
