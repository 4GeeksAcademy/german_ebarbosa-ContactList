import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="ml-auto" style={{marginLeft: "auto", marginRight: 20}}>
					<Link to="/form">
						<button className="btn btn-success">Add New Contact!</button>
					</Link>
				</div>
			</nav>
		</>
	);
};
