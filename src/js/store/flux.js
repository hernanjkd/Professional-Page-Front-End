const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			user: {
				id: 17,
				firstName: "Hernan",
				lastName: "Garcia",
				email: "hernan.garcia@gmail.com",
				dob: "5/30/80",
				phone: "(305)878-3294",
				image_url: "http://lorempixel.com/300/400/nature/2",
				resume_style: null,
				theme: null,
				title: "Software Engineer",
				display: "objective"
			},
			experience: [
				{
					id: 1,
					title: "Programmer",
					company: "4 Geeks Academy",
					description: "Worked as a programmer using React and Flask.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "false",
					page: "false"
				},
				{
					id: 2,
					title: "Restaurant Manager",
					company: "Centerplate",
					description:
						"Managed people and distributed the workload among all the employees. Set tables and silverware.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true",
					page: "false"
				},
				{
					id: 3,
					title: "Car Washer",
					company: "Clean Clean Cars",
					description: "Cleaned cars the best way that anyone can.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "false",
					page: "true"
				},
				{
					id: 4,
					title: "Warehouse Manager",
					company: "Bill Hansen's Catering",
					description: "Organized events and employees.",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true",
					page: "true"
				}
			],
			skills: [
				{
					id: 1,
					skill: "JavaScript",
					level: 7,
					resume: "true",
					page: "true"
				},
				{
					id: 2,
					skill: "PHP",
					level: 5,
					resume: "false",
					page: "true"
				},
				{
					id: 3,
					skill: "Java",
					level: 5,
					resume: "false",
					page: "true"
				},
				{
					id: 4,
					skill: "Scheme",
					level: 5,
					resume: "false",
					page: "false"
				},
				{
					id: 5,
					skill: "React",
					level: 5,
					resume: "true",
					page: "true"
				},
				{
					id: 6,
					skill: "Python",
					level: 3,
					resume: "true",
					page: "false"
				}
			],
			education: [
				{
					id: 1,
					school: "FIU",
					degree: "Computer Science",
					course: "JavaScript Programming",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true"
				},
				{
					id: 2,
					school: "4 Geeks Academy",
					degree: "Full Stack Developer",
					course: "React, Flask",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true"
				}
			],
			product: [
				{
					id: 1,
					description: null,
					date: null,
					url: null,
					page: null
				}
			],
			about: [
				{
					id: 1,
					description:
						"I really enjoy coding and helping out others, my favorite subject to read is about aliens and other civilizations.<br>This is just some writing so we can see how it looks when there is a good amount of context. Maybe I can create some more content to fill up.",
					resume: "true",
					page: "true"
				},
				{
					id: 2,
					description: "Another about me section in case I want a different one in the resume from the page.",
					resume: "false",
					page: "false"
				}
			],
			purpose: [
				{
					description: "Helping companies reach their goals by serving them great mate.",
					resume: "true",
					page: "true"
				}
			],
			links: [
				{
					url: "https://www.linkedin.com/in/hernan-garcia-448400186/"
				},
				{
					url: "https://github.com/hernanjkd"
				}
			]
		},
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
			addEducation: () => {},
			editEducation: () => {},
			deleteEducation: () => {}
		}
	};
};

export default getState;
