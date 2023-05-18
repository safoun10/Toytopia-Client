import React from "react";
import Banner from "../../components/banner/Banner";
import "./Body.css";
import TopNav from "../../components/topNav/TopNav";

const Body = () => {
	return (
		<div>
			<div className="bg-home-top">
				<div>
					<TopNav></TopNav>
				</div>
				<div>
					<Banner></Banner>
				</div>
			</div>
		</div>
	);
};

export default Body;
