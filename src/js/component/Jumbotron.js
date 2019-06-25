import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid p-5 bg-white">
				<div className="container">
					<div className="row">
						<div className="col">
							<h1 className="display-4">Fluid jumbotron!!!!</h1>
							<p className="lead">
								This is a modified jumbotron that occupies the entire horizontal space of its parent.
							</p>
						</div>
						<div className="col">
							<img
								src="http://static1.squarespace.com/static/5755a35501dbae3c6d1ba03e/575f377b859fd09b4e47e86f/57d30447be65947fb326a32b/1475862663796/building_personal_website.jpg?format=1500w"
								className="img-thumbnail"
								alt="Responsive image"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
