import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";

export class Login extends React.Component {
	loginStyle = {
		height: window.innerHeight - 200
	};

	render() {
		return (
			<div>
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
				<div className="bg-dark">
					<div className="form-row">
						<div className="form-group col-md-1">
							<div className="container mt-3">
								<div className="first media mt-3">
									<img
										src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH"
										className="align-self-center mr-3"
									/>
									<div className="media-body">
										<h4>Create your portfolio in a few clicks!!!</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-1">
							<div className="second media mt-3">
								<img
									src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH"
									className="align-self-center mr-3 width"
								/>
								<div className="container mt-3">
									<div className="media-body">
										<h4>Quick Resume Setup</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-1">
							<div className="third media mt-3">
								<img
									src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH"
									className="align-self-start mr-3"
								/>
								<div className="media-body">
									<h4>Business cards made easy</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-1">
							<div className="fourth media mt-3">
								<img
									src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH"
									className="align-self-start mr-3"
								/>
								<div className="media-body">
									<h4>Jobs click and apply!!</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-1">
								<div className="five media mt-3">
									<img
										src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH"
										className="align-self-start mr-3"
									/>
									<div className="media-body">
										<h4>SHOW EMPLOYERS YOUR TALENT</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

{
	/*<Navbar className="bg-light justify-content-between">
				<Form inline>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
					</InputGroup>
				</Form>
				<Form inline>
					<FormControl type="text" placeholder="Search" className=" mr-sm-2" />
					<Button type="submit">Submit</Button>
				</Form>
			</Navbar>*/
}
