import React from "react";

export const Registration = () => {
	return (
		<div className="bg-white">
			<div className="container-fluid">
				<div className="row">
					<div className="col" />
					<div className="col-6 col-offset-3">
						<div className="panel panel-primary">
							<div className="panel-heading pb-3">Thank you for Signing Up!</div>
							<div className="panel-body">
								<form role="Form" method="post" action="" acceptCharset="UTF-8">
									<div className="form-group">
										<label htmlFor="fname">First Name</label>
										<input
											type="text"
											id="fname"
											className="form-control"
											name="fname"
											placeholder="Example: John"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="lname">Last Name</label>
										<input
											type="text"
											id="lname"
											className="form-control"
											name="lname"
											placeholder="Example: Doe"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="birthDate">Date of Birth*</label>

										<input type="date" id="birthDate" className="form-control" />
									</div>
									<div className="form-group">
										<label htmlFor="emailaddr">Email Address</label>
										<input
											type="text"
											id="emailaddr"
											className="form-control"
											name="email"
											placeholder="Example: john.doe@gmail.com"
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
									<div className="form-group text-center">
										<button
											type="submit"
											className="btn btn-primary btn-lg"
											id="submitbtn"
											name="submit">
											Sign up!
										</button>
									</div>
								</form>
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
