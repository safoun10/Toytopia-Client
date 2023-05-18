import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
	// Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture.
	return (
		<div className="px-4 py-3 d-flex justify-content-around align-items-center">
			<div className="display-4 text-one">
				<Link className="text-decoration-none ">ToyTopia</Link>
			</div>

			<div className="gap-5 fs-4 d-flex justify-content-center align-items-center">
				<div>
					<Link to={"/"} className="text-decoration-none text-two">
						Home
					</Link>
				</div>
				<div>
					<Link
						to={"/blog"}
						className="text-decoration-none text-two"
					>
						Blog
					</Link>
				</div>
				<div>
					<Link
						to={"/all-toy"}
						className="text-decoration-none text-two"
					>
						All Toys
					</Link>
				</div>
				<div>
					<Link
						to={"/my-toy"}
						className="text-decoration-none text-two"
					>
						My Toys
					</Link>
				</div>
				<div>
					<Link
						to={"/add-toy"}
						className="text-decoration-none text-two"
					>
						Add a toy
					</Link>
				</div>
			</div>

			<div>
				<div className="btn btn-bg-gradient">
					<Link className="text-decoration-none text-white">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
