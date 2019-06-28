import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { Jumbotron } from "../component/Jumbotron";
import { Context } from "../store/appContext";

export class Login extends React.Component {
	render() {
		return (
			<div className="bg-dark">
				<div className="container-fluid bg-white pb-5">
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

							<Context.Consumer>
								{({ actions }) => {
									return (
										<Button
											className="p-1 pr-4 pl-4 d-flex justify-content-center"
											type="submit"
											onClick={() => actions.loginUser()}>
											Login
										</Button>
									);
								}}
							</Context.Consumer>

							<div className="float-right">
								<Link to={"/registration"}>
									<Button className="p-1 pr-4 pl-4 secondary mt-5" type="submit">
										Register
									</Button>
								</Link>
							</div>
						</Form>
						<div className="col-2" />
					</div>
				</div>
				<div className="form-row" />
				<div className="jumbotron jumbotron-fluid p-5 bg-dark text-light">
					<div className="container">
						<div className="row">
							<div className="col">
								<img
									src="https://static1.squarespace.com/static/5604ac69e4b02c0c1c454aed/t/582f3ed0be65940ae0404f70/1479491298313/shutterstock_132019721.jpg?format=1500w"
									className="img-thumbnail border-0 p-0"
									alt="Responsive image"
								/>
							</div>
							<div className="col font-weight-light w-350px">
								<h2 className="font-weight-light">Easily Setup your portfolio page</h2>
								<p>{""}</p>
								<h5 className="font-weight-light pagragrafo">
									Once you’ve learned how to display a portoflio, you’ll never be far from a paycheck.
									We’re here to explain the ins and outs of showing your projects, so you can spend
									less time applying to jobs and more time making money.{" "}
								</h5>
								{/* <p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p> */}
							</div>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid p-5 bg-white">
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="font-weight-light">How our resume builder helps you land jobs faster</h2>
								<p> </p>
								<h5 className="font-weight-light pagragrafo">
									No more worries about how to make your resume. We guide you through the process of
									writing each section, step-by-step, down to the smallest part. Our resume generator
									does all of the hard work. Remember, your work experiences and education are unique.
								</h5>
								{/* <p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p> */}
							</div>
							<div className="col">
								<img
									src="https://www.hlb.com.my/content/dam/hlb/my/images/Business/Homepage/business-homepage-connectfirst-tile.jpg"
									className="img-thumbnail border-0 p-0"
									alt="Responsive image"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid bg-dark p-5 text-light mb-0">
					<div className="container">
						<div className="row">
							<div className="col">
								<img
									src="https://static1.squarespace.com/static/5bc8fc367046807597d3d63d/t/5c1848204d7a9c986e1e75e2/1545095228073/?format=1500w"
									className="img-thumbnail border-0 p-0"
									alt="Responsive image"
								/>
							</div>
							<div className="col">
								<h2 className="font-weight-light">
									Automatically create business card, just print them out!
								</h2>
								<p> </p>
								<h5 className="font-weight-light pagragrafo">
									You can further customize your business cards for specific market segments or
									locales, and you can add names and job titles for new employees as your business
									grows.
								</h5>

								{/* <p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p> */}
							</div>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid p-5 bg-white">
					<div className="container">
						<div className="row">
							<div className="col align-self-center">
								<h2 className="font-weight-light">Apply to jobs and sumbit your resume with clicks</h2>
								<p> </p>
								<h5 className="font-weight-light pagragrafo">
									Beat the competition with a professional CPRW quality resume that can be emailed and
									downloaded in multiple file types including Microsoft Word and PDF formats. Our
									professional templates are Applicant Tracking System friendly, meaning you won’t get
									rejected by picky HR software.
								</h5>
								{/* <p className="lead">
									This is a modified jumbotron that occupies the entire horizontal space of its
									parent.
								</p> */}
							</div>
							<div className="col">
								<img
									src="https://cdn.pixabay.com/photo/2018/02/14/10/28/business-3152586__340.jpg"
									className="img-thumbnail border-0 p-0"
									alt="Responsive image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
