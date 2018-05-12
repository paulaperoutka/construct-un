import React from "react";

const Navbar = props => (
	<div className="wrapper">
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand mb-0 h1"><image src="http://www.clker.com/cliparts/p/p/f/1/S/9/un-logo-black.svg"></image></span>
			<span className="navbar-text text-center minion-message">{props.message}</span>
			<span className="navbar-text minion-score">
				Score: <span>{props.score} | </span> 
	      Top Score: <span>{props.topScore}</span>
			</span>
		</nav>
	</div>
)

export default Navbar;