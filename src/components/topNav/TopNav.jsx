import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopNav.css";
import { BsFlower1, BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const TopNav = () => {
	const { user, logout } = useContext(AuthContext);
	const [URL , setURL] = useState("")

	useEffect(()=> {
		setURL(user?.photoURL);
	} , [user])

	const signOut = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "Do you really want to log out from this site ?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				logout();
				toast("Signed Out !");
			} else {
				toast("😍💕", {
					autoClose: 500,
					hideProgressBar: true,
					position: "top-center",
				});
			}
		});
	};

	return (
		<div className="px-4 py-3 d-flex justify-content-around align-items-center">
			<div className="display-4">
				<NavLink activeClassName="active-link" to={"/"} className="text-decoration-none text-two d-flex">
					<div className="me-2">
						<BsFlower1></BsFlower1>
					</div>
					<div>ToyTopia</div>
				</NavLink>
			</div>

			<div className="gap-5 fs-4 d-flex justify-content-center align-items-center">
				<div>
					<NavLink activeClassName="active-link" to={"/"} className="text-decoration-none text-two">
						Home
					</NavLink>
				</div>
				<div>
					<NavLink activeClassName="active-link"
						to={"/blog"}
						className="text-decoration-none text-two"
					>
						Blog
					</NavLink>
				</div>
				<div>
					<NavLink activeClassName="active-link"
						to={"/all-toy"}
						className="text-decoration-none text-two"
					>
						All Toys
					</NavLink>
				</div>
				{user && (
					<div>
						<NavLink activeClassName="active-link"
							to={"/my-toy"}
							className="text-decoration-none text-two"
						>
							My Toys
						</NavLink>
					</div>
				)}
				{user && (
					<div>
						<NavLink activeClassName="active-link"
							to={"/add-toy"}
							className="text-decoration-none text-two"
						>
							Add a toy
						</NavLink>
					</div>
				)}
			</div>

			<Tooltip id="my-tooltip" />
			{user ? (
				<div className="d-flex justify-content-center align-items-center gap-3">
					{user?.photoURL ? (
						<div
							data-tooltip-id="my-tooltip"
							data-tooltip-content={user.displayName}
							data-tooltip-place="top"
						>
							<img
								className="profile-img"
								src={URL}
								alt="profile_photo"
							/>
						</div>
					) : (
						<div>
							<BsPersonCircle
								data-tooltip-id="my-tooltip"
								data-tooltip-content={user.email}
								data-tooltip-place="top"
								className="display-5 text-zero"
							></BsPersonCircle>
						</div>
					)}
					<Link className="text-decoration-none text-white">
						<div onClick={signOut} className="btn btn-bg-gradient">
							Logout
						</div>
					</Link>
				</div>
			) : (
				<div>
					<Link
						to={"/login"}
						className="text-decoration-none text-white"
					>
						<div className="btn btn-bg-gradient">Login</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default TopNav;
