import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { Jumbotron } from "../component/Jumbotron";

export class Login extends React.Component {
	loginStyle = {
		height: window.innerHeight - 400
	};

	render() {
		return (
			<div className="bg-dark">
				<div className="container-fluid bg-white" style={this.loginStyle}>
					<div className="row imageStyle pt-5">
						<div className="col-1" />
						<div className="col-4">
							<h3>Connect with companies</h3>
							<h5>
								<i className="far fa-file-alt p-3" />
								Create a Portfolio
							</h5>
							<h5>
								<i className="fas fa-file-code p-3" />
								Update Projects
							</h5>
							<h5>
								<i className="fas fa-project-diagram p-3" />
								Find your next Opportunity
							</h5>
						</div>
						<div className="col-1" />
						<Form className="col-4">
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Button className="p-1 pr-4 pl-4 d-flex justify-content-center" type="submit">
								Login
							</Button>

							<Form.Group controlId="formBasicChecbox">
								<Form.Check
									type="checkbox"
									className="pt-3"
									label="Agreed with the Terms and Conditions"
								/>
							</Form.Group>
							<div className="float-right">
								<Link to={"/registration"}>
									<Button className="p-1 pr-4 pl-4 secondary" type="submit">
										Register
									</Button>
								</Link>
							</div>
						</Form>
						<div className="col-2" />
					</div>
				</div>
				<div className="form-row" />
				<Jumbotron />
				<div className="jumbotron jumbotron-fluid p-5 bg-dark text-light">
					<div className="container">
						<div className="row">
							<div className="col">
								<img
									src="https://static1.squarespace.com/static/5604ac69e4b02c0c1c454aed/t/582f3ed0be65940ae0404f70/1479491298313/shutterstock_132019721.jpg?format=1500w"
									className="img-thumbnail"
									alt="Responsive image"
								/>
							</div>
							<div className="col">
								<center>
									<h2>Fluid jumbotron</h2>
								</center>
								<p> </p>
								<p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid p-5 bg-white">
					<div className="container">
						<div className="row">
							<div className="col">
								<h1 className="display-4">Fluid jumbotron</h1>
								<p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
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
				<div className="jumbotron jumbotron-fluid p-5 bg-dark text-light mb-0">
					<div className="container">
						<div className="row">
							<div className="col">
								<img
									src="https://static1.squarespace.com/static/5bc8fc367046807597d3d63d/t/5c1848204d7a9c986e1e75e2/1545095228073/?format=1500w"
									className="img-thumbnail"
									alt="Responsive image"
								/>
							</div>
							<div className="col">
								<h1 className="display-4">Fluid jumbotron</h1>
								<p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// {
// 	/*<Navbar className="bg-light justify-content-between">
// 				<Form inline>
// 					<InputGroup>
// 						<InputGroup.Prepend>
// 							<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
// 						</InputGroup.Prepend>
// 						<FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
// 					</InputGroup>
// 				</Form>
// 				<Form inline>
// 					<FormControl type="text" placeholder="Search" className=" mr-sm-2" />
// 					<Button type="submit">Submit</Button>
// 				</Form>
// 			</Navbar>*/
// }
