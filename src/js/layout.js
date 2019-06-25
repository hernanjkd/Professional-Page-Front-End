import React from "react";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../styles/index.scss";
import "../styles/resume.scss";
import "../styles/page.scss";
import "../styles/login.scss";

import { Resume } from "./views/resume";
import { Page } from "./views/page";
import { Experiences } from "./views/experiences";
import { Skills } from "./views/skills";
import { Education } from "./views/education";
import { Login } from "./views/login";
import { Registration } from "./views/registration";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const views = {
	experiences: Experiences,
	skills: Skills,
	education: Education,
	resume: Resume,
	page: Page
};

export class Layout extends React.Component {
	state = {
		userLoggedIn: false,
		left: "education",
		right: "page"
	};

	rowStyle = {
		height: window.innerHeight - 30
	};

	render() {
		if (!this.state.userLoggedIn) {
			return (
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/registration" component={Registration} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			);
		} else {
			const LeftPanel = views[this.state.left];
			const RightPanel = views[this.state.right];
			return (
				<div className="d-flex flex-column h-100">
					<div className="container-fluid">
						<div className="top-panel row">
							<div className="top-panel col-12 border-bottom text-center">top panel</div>
						</div>
						<div className="body row">
							<div
								className={
									this.state.right === "page"
										? "left-panel col-3 border-right text-center"
										: "left-panel col-4 border-right text-center"
								}
								style={this.rowStyle}>
								<div className="text-left">
									<div
										className="route border-bottom border-left p-1 text-light d-inline-block"
										onClick={() => this.setState({ left: "experiences" })}>
										Experiences
									</div>
									<div
										className="route border-bottom border-left p-1 text-light d-inline-block"
										onClick={() => this.setState({ left: "skills" })}>
										Skills
									</div>
									<div
										className="route border border-top-0 p-1 text-light d-inline-block"
										onClick={() => this.setState({ left: "education" })}>
										Education
									</div>
								</div>
								<LeftPanel />
							</div>
							<div className="right-panel col text-center" style={this.rowStyle}>
								<div className="text-right">
									<div
										className="route border-bottom border-left p-1 text-light d-inline-block"
										onClick={() => this.setState({ right: "resume" })}>
										Resume
									</div>
									<div
										className="route border border-top-0 p-1 text-light d-inline-block"
										onClick={() => this.setState({ right: "page" })}>
										Page
									</div>
								</div>
								<RightPanel />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default injectContext(Layout);
