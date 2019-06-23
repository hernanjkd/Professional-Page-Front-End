import React from "react";
import Logo from "../../img/pwp-logo.png";
import Team from "../../img/pwp-team.png";

export const Navbar = () => {
	return (
		<nav className="navbar bg-white pb-5">
			<img src={Logo} />
			<img src={Team} />
		</nav>
	);
};
