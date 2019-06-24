import React from "react";
import { Context } from "../store/appContext";
import { Projects } from "../component/projects";

export class Page extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: null,
			display: "objective"
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const name = store.user.firstName + " " + store.user.lastName;

					const skills = store.skills;
					const half = skills.length / 2;

					// Contains the information for the user title, goals and skills
					const objective = (
						<div className="col-5 text-left align-self-center">
							<h1 className="mb-5">{store.user.title}</h1>
							<p className="mb-5">{store.user.goal}</p>

							<ul className="d-inline-block mr-5 ml-5">
								{skills.slice(0, half).map((item, i) => {
									return <li key={i}>{item.skill}</li>;
								})}
							</ul>
							<ul className="d-inline-block ml-3">
								{skills.slice(half).map((item, i) => {
									return <li key={i}>{item.skill}</li>;
								})}
							</ul>
						</div>
					);

					// Contains the about me information
					let [aboutArr] = store.about.filter(item => item.page === "true");
					aboutArr = aboutArr.description.split("<br>");
					const about = (
						<div className="col-5 text-left">
							<h2 className="mt-5">About Me</h2>
							{aboutArr.map((item, index) => {
								return <p key={index}>{item}</p>;
							})}
						</div>
					);

					// initialize the state.. if don't put condition, it creates an infinite loop
					if (!this.state.content) this.setState({ content: objective });

					if (this.state.display !== store.user.display) {
						const temp1 = store.user.display === "about" ? about : objective;
						const temp2 = store.user.display === "about" ? "about" : "objective";
						this.setState({ content: temp1, display: temp2 });
					}

					return (
						<div className="page container m-2 p-0 bg-light">
							<nav className="navBar">
								<a>{name}</a>
								<a className="nav-link" href="#projects">
									Projects
								</a>
								<a
									className="nav-link"
									onClick={e => {
										actions.changeDisplay();
										e.target.innerHTML = store.user.display === "about" ? "Objective" : "About";
									}}>
									About
								</a>
								Contact
							</nav>
							<div className="row pt-5">
								<div className="col-1" />

								<div className="col-3">
									<img className="profile-image imgshadow" src={store.user.imageURL} alt={name} />
								</div>
								<div className="col-2" />

								{this.state.content}

								<div className="col-1" />
							</div>
							<div className="projectsRow row d-flex justify-content-around">
								<Projects />
							</div>
							<footer className="mt-auto py-5 text-center">
								<a href={store.user.linkedinURL} className="li-ic mr-5" role="button">
									<i className="fab fa-lg fa-linkedin-in" />
								</a>
								<a href={store.user.githubURL} className="git-ic mr-5" role="button">
									<i className="fab fa-lg fa-github" />
								</a>
								<a className="email-ic mr-5" role="button">
									<i className="far fa-lg fa-envelope" />
								</a>
							</footer>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
