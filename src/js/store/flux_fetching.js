const URL = "https://3000-b02fef55cde8-4c3f-b61d-f1d75cc4c1d5.ws-us0.gitpod.io";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: [],
		actions: {
			changeDisplay: () => {
				//get the store
				const store = getStore();
				const updatedUser = store.user;

				updatedUser.display = store.user.display === "objective" ? "about" : "objective";

				setStore({ user: updatedUser });
			},
			getTable: tableName => {
				fetch(process.env.HOST + "/" + tableName)
					.then(response => response.json())
					.then(data => {
						const store = getStore();
						store[tableName] = data;
						setStore({ store });
					});
			},
			addExperience: (title, company, description, fromDate, toDate, resume, page, user_id) => {
				const store = getStore();
				fetch(process.env.HOST + "/experience", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						title: title,
						company: company,
						description: description,
						fromDate: fromDate,
						toDate: toDate,
						resume: resume,
						page: page,
						user_id: user_id
					})
				}).then(() => {
					fetch(process.env.HOST + "/experience")
						.then(response => response.json())
						.then(data => {
							store.experience = data;
							setStore({ store });
						});
				});
			},
			editExperience: (id, title, company, description, fromDate, toDate, resume, page) => {
				const store = getStore();
				fetch(process.env.HOST + "/experience/" + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						id: id,
						title: title,
						company: company,
						description: description,
						fromDate: fromDate,
						toDate: toDate,
						resume: resume,
						page: page
					})
				}).then(() => {
					fetch(process.env.HOST + "/experience")
						.then(response => response.json())
						.then(data => {
							store.experience = data;
							setStore({ store });
						});
				});
			},
			deleteExperience: id => {
				const store = getStore();
				fetch(process.env.HOST + "/experience/" + id, {
					method: "delete"
				}).then(() => {
					fetch(process.env.HOST + "/experience")
						.then(response => response.json())
						.then(data => {
							store.experience = data;
							setStore({ store });
						});
				});
			},
			addSkill: (skill, resume, page, user_id) => {
				const store = getStore();
				fetch(process.env.HOST + "/skills", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						skill: skill,
						resume: resume,
						page: page,
						user_id: user_id
					})
				}).then(() => {
					fetch(process.env.HOST + "/skills")
						.then(response => response.json())
						.then(data => {
							store.skills = data;
							setStore({ store });
						});
				});
			},
			editSkill: (id, skill, resume, page) => {
				const store = getStore();
				fetch(process.env.HOST + "/skills/" + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						id: id,
						skill: skill,
						resume: resume,
						page: page
					})
				}).then(() => {
					fetch(process.env.HOST + "/skills")
						.then(response => response.json())
						.then(data => {
							store.skills = data;
							setStore({ store });
						});
				});
			},
			deleteSkill: id => {
				const store = getStore();
				fetch(process.env.HOST + "/skills/" + id, {
					method: "delete"
				}).then(() => {
					fetch(process.env.HOST + "/skills")
						.then(response => response.json())
						.then(data => {
							store.skills = data;
							setStore({ store });
						});
				});
			},
			addEducation: (school, degree, course, fromDate, toDate, resume, user_id) => {
				const store = getStore();
				fetch(process.env.HOST + "/education", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						school: school,
						degree: degree,
						course: course,
						fromDate: fromDate,
						toDate: toDate,
						resume: resume,
						user_id: user_id
					})
				}).then(() => {
					fetch(process.env.HOST + "/education")
						.then(response => response.json())
						.then(data => {
							store.education = data;
							setStore({ store });
						});
				});
			},
			editEducation: (id, school, degree, course, fromDate, toDate, resume, user_id) => {
				const store = getStore();
				fetch(process.env.HOST + "/education/" + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						id: id,
						school: school,
						degree: degree,
						course: course,
						fromDate: fromDate,
						toDate: toDate,
						resume: resume,
						user_id
					})
				}).then(() => {
					fetch(process.env.HOST + "/education")
						.then(response => response.json())
						.then(data => {
							store.education = data;
							setStore({ store });
						});
				});
			},
			deleteEducation: id => {
				const store = getStore();
				fetch(process.env.HOST + "/education/" + id, {
					method: "delete"
				}).then(() => {
					fetch(process.env.HOST + "/education")
						.then(response => response.json())
						.then(data => {
							store.education = data;
							setStore({ store });
						});
				});
			},
			addUser: (firstname, lastname, email, password) => {
				fetch(process.env.HOST, {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						firstname: firstname,
						lastname: lastname,
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(data => {
						const store = getStore();
						store = data;
						setStore({ store });
					});
			},
			loginUser: (email, password) => {
				fetch(URL + "/login", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						localStorage.setItem("jwt", token.jwt);
						localStorage.getItem("jwt");
					});
			}
		}
	};
};

export default getState;
