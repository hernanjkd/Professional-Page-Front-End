const URL = "https://3000-b02fef55-cde8-4c3f-b61d-f1d75cc4c1d5.ws-us0.gitpod.io";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		actions: {
			cardStyle: i => {
				setStore({ cardStyle: i });
			},
			changeDisplay: () => {
				const store = getStore();
				const updatedUser = store.user;

				updatedUser.display = store.user.display === "objective" ? "about" : "objective";

				setStore({ user: updatedUser });
			},
			loginUser: () => {
				setStore({ userLoggedIn: true });
			},
			addItem: (category, item) => {
				let store = getStore();
				setStore({ [category]: store[category].concat([item]) });
			},
			editItem: (category, index, item) => {
				let store = getStore();
				store[category][index] = item;
				setStore({ [category]: store[category] });
			},
			deleteItem: (category, id) => {
				let store = getStore();
				store[category] = store[category].filter(item => id != item.id);
				setStore({ [category]: store[category] });
			}
		},
		store: {
			cardStyle: 0,
			userLoggedIn: true,
			user: {
				id: 1,
				firstName: "Hernan",
				lastName: "Garcia",
				email: "hernan.garcia@gmail.com",
				dobDate: "5/30/80",
				imageURL:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrmNOXEcCL03rw3gs5zlYF7NglJ-0DdrIE1tujA2h2buim-Kd",
				resumeStyle: null,
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
					resume: "true",
					page: "true"
				},
				{
					id: 2,
					skill: "PHP",
					resume: "false",
					page: "true"
				},
				{
					id: 3,
					skill: "Java",
					resume: "false",
					page: "true"
				},
				{
					id: 4,
					skill: "Scheme",
					resume: "false",
					page: "false"
				},
				{
					id: 5,
					skill: "React",
					resume: "true",
					page: "true"
				},
				{
					id: 6,
					skill: "Python",
					resume: "true",
					page: "false"
				},
				{
					id: 7,
					skill: "Git",
					resume: "true",
					page: "false"
				},
				{
					id: 8,
					skill: "HTML",
					resume: "true",
					page: "false"
				},
				{
					id: 9,
					skill: "Bootstrap",
					resume: "true",
					page: "false"
				},
				{
					id: 10,
					skill: "CSS",
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
					school: "University of Miami",
					degree: "Agriculture",
					course: "Urban Gardening",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true"
				},
				{
					id: 3,
					school: "FSU",
					degree: "Psychology",
					course: "",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "false"
				},
				{
					id: 4,
					school: "University of Maine",
					degree: "Mathematics",
					course: "Calculus, Trigonometry, Algebra",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "true"
				},
				{
					id: 5,
					school: "4Geeks Academy",
					degree: "Data Analytics",
					course: "Panda, Python, Data Analysis",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "false"
				},
				{
					id: 6,
					school: "FIU",
					degree: "Physics",
					course: "E = mc squared",
					fromDate: "05/01/2019",
					toDate: "09/01/2019",
					resume: "false"
				},
				{
					id: 7,
					school: "4Geeks Academy",
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
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
		}
	};
};

export default getState;
