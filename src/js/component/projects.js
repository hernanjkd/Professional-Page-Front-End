import React from "react";

const projectDescription = [
	{
		name: "Tic-Tac-Toe",
		Tools: "React · ECMASCRIPT · HTML · CSS",
		imgUrl:
			"https://www.athome.com/dw/image/v2/AAYZ_PRD/on/demandware.static/-/Sites-AtHome/default/dw8ddc6364/images/124217187.jpg?sw=1268&sh=1992&sm=fit",
		Code: "https://github.com/jhcxavier/Tic-Tac-Toe/blob/master/src/js/App.js"
	},

	{
		name: "Traffic Light",
		Tools: "React · CSS · HTML · ECMASCRIPT",
		imgUrl:
			"https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2015/08/o-TRAFFIC-LIGHT-facebook-1024x512.jpg-.jpg",
		Code: "https://github.com/jhcxavier/Traffic-Light-React-/blob/master/src/js/component/TrafficLight.js"
	},
	{
		name: "Battleship",
		Tools: "JavaScript · React · HTML · CSS",
		imgUrl:
			"https://www.gamersdecide.com/sites/default/files/authors/u147237/world-of-warships-battleship-bellerophon.jpg",
		Code: "https://github.com/hernanjkd/Battleship"
	},
	{
		name: "Music Player",
		Tools: "Bootstrap · JavaScript · API · CSS",
		imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91e9eqVQhJL.png",
		Code: "https://github.com/hernanjkd/Music-Player"
	},
	{
		name: "Instagram Feed",
		Tools: "React · CSS · HTML · JS · Bootstrap",
		imgUrl: "https://10web.io/wp-content/uploads/2017/11/instagram_320-min.png",
		Code: "https://github.com/VF4code/Instagram-Feed"
	},
	{
		name: "Contact List",
		Tools: "React · Flask · Python · JS · HTML",
		imgUrl: "https://www.recovery-android.com/images/android-tips/nexus-contacts-to-display.jpg",
		Code: "https://github.com/jhcxavier/Contact-List-Back-End"
	}
];

export class Projects extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div id="projects" className="row d-flex justify-content-around">
					{projectDescription.map((item, index) => {
						return (
							<div key={index} className="projects imgshadow col-3 m-4  bg-dark text-light p-0 pb-2">
								<img src={item.imgUrl} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.Tools}</p>
									<a href="#" className="btn btn-info float-left">
										Demo
									</a>
									<a
										href={item.Code}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-info float-right">
										Code
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
