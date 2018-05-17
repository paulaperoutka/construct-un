import React from "react";
import { Link } from "react-router-dom";
import "./NavbarBlank.css";

const NavbarBlank = props => (
	<div className="navbar-wrapper">
		<div className="navbar fixed-top">
			<span className="navbar-brand mb-0 h1">
				<img id="un-two" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_the_United_Nations.svg/2000px-Emblem_of_the_United_Nations.svg.png" alt="un-emblem"></img>
				<div id="reroute">
					<Link to="/" outline color="secondary">Main </Link>&#8226;
					<Link to="/securitycouncil" outline color="secondary"> Security Council </Link>&#8226; 
					<Link to="/unresolutions" outline color="secondary"> Resolutions</Link>
				</div>
			</span>
		</div>
	</div>
)

export default NavbarBlank;
