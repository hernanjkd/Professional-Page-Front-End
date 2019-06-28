import React, { useState } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";

export const Registration = () => {
	const [email, setEmail] = useState("");

	return (
		<div className="bg-white registration">
			<div className="container-fluid">
				<div className="row">
					<div className="col" />
					<div className="col-6 col-offset-3">
						<div className="panel panel-primary">
							<div className="panel-heading pb-3" />
							<div className="panel-body">
								<div className="form-group">
									<label htmlFor="fname">Full Name</label>
									<input
										type="text"
										id="fname"
										className="form-control"
										name="fname"
										placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="emailaddr">Email Address</label>
									<input
										type="text"
										id="emailaddr"
										className="form-control"
										name="email"
										placeholder=""
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										id="password"
										className="form-control"
										name="password"
										placeholder=""
									/>
								</div>
								<div className="form-group">
									<label htmlFor="verifypass">Verify Password</label>
									<input
										type="password"
										id="confirmpass"
										className="form-control"
										name="verifypass"
										placeholder=""
									/>
								</div>
								<Form.Group controlId="formBasicChecbox">
									<Form.Check
										type="checkbox"
										className="p-3"
										label="Agreed with the Terms and Conditions"
									/>
								</Form.Group>
								<div className="form-group text-center">
									<Context.Consumer>
										{({ actions }) => {
											return (
												<button
													type="submit"
													className="btn btn-primary btn-lg pt-3"
													id="submitbtn"
													name="submit"
													onClick={() => actions.loginUser()}>
													Sign up!
												</button>
											);
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>
					<div className="col" />
				</div>
			</div>
		</div>
	);
};
// <center>
// 	<div className="container">
// 		<form className="form-horizontal" role="form">
// 			<h2>Registration</h2>
// 			<div className="form-group">
// 				<label htmlFor="firstName" className="col-sm-3 control-label">
// 					First Name
// 				</label>
// 				<div className="col-sm-9">
// 					<input
// 						type="text"
// 						id="firstName"
// 						placeholder="First Name"
// 						className="form-control"
// 						autoFocus
// 					/>
// 				</div>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="lastName" className="col-sm-3 control-label">
// 					Last Name
// 				</label>
// 				<div className="col-sm-9">
// 					<input
// 						type="text"
// 						id="lastName"
// 						placeholder="Last Name"
// 						className="form-control"
// 						autoFocus
// 					/>
// 				</div>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="email" className="col-sm-3 control-label">
// 					Email*{" "}
// 				</label>
// 				<div className="col-sm-9">
// 					<input type="email" id="email" placeholder="Email" className="form-control" name="email" />
// 				</div>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password" className="col-sm-3 control-label">
// 					Password*
// 				</label>
// 				<div className="col-sm-9">
// 					<input type="password" id="password" placeholder="Password" className="form-control" />
// 				</div>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="password" className="col-sm-3 control-label">
// 					Confirm Password*
// 				</label>
// 				<div className="col-sm-9">
// 					<input type="password" id="password" placeholder="Password" className="form-control" />
// 				</div>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="birthDate" className="col-sm-3 control-label">
// 					Date of Birth*
// 				</label>
// 				<div className="col-sm-9">
// 					<input type="date" id="birthDate" className="form-control" />
// 				</div>
// 			</div>

// 			<button type="submit" className="btn btn-primary btn-block">
// 				Register
// 			</button>
// 		</form>
// 	</div>
// </center>
