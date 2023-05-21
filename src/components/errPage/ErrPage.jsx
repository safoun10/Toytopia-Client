import React from "react";
import { Link } from "react-router-dom";

const ErrPage = () => {
	return (
		<div
			className="d-flex flex-column gap-5 justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<div>
				<img
					className="img-fluid"
					src="https://media.istockphoto.com/id/655281432/vector/telescope-searching-404-banner.jpg?s=612x612&w=0&k=20&c=MiOZK4ZoCk39trblQrE6mBP-sB8_D9SM00_k8FhdEXI="
					alt="404"
				/>
			</div>
			<Link className="text-decoration-none text-white" to={"/home"}>
				<div className="btn btn-secondary px-5 py-2">
					{"<-- "}
					Go Back To Home Page{" "}
				</div>
			</Link>
		</div>
	);
};

export default ErrPage;
