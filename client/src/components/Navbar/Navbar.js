import React from "react";
import RenderResolution from "../RenderResolution";
import "./Navbar.css";

const Navbar = props => (
	<div className="navbar-wrapper">
		<div className="navbar fixed-top">
			<span className="navbar-brand mb-0 h1">
				<img id="un-two" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_the_United_Nations.svg/2000px-Emblem_of_the_United_Nations.svg.png" alt="un-emblem"></img>
				
				<RenderResolution />
			</span>
		</div>
	</div>
)

export default Navbar;
