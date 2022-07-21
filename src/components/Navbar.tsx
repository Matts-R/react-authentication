import React from "react";
import { Link } from "react-router-dom";
import { RoutesList } from "../routes/routes";
import { Fragment } from "react";
const Navbar: React.FC = () => {
	return (
		<header>
			<h1> Navbar </h1>
			<nav>
				{RoutesList.map((route) => (
					<Fragment key={route.name}>
						<Link {...route}>{route.name}</Link>
					</Fragment>
				))}
			</nav>
		</header>
	);
};

export default Navbar;
