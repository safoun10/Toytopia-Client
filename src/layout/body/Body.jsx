import React from "react";
import Banner from "../../components/banner/Banner";
import "./Body.css";
import TopNav from "../../components/topNav/TopNav";
import ToysForKids from "../../components/toysForKids/ToysForKids";
import Gallery from "../../components/gallery/Gallery";

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
			<div className="bg-home-2 mt-4 py-2">
				<ToysForKids></ToysForKids>
			</div>
			<div><Gallery></Gallery></div>
		</div>
	);
};

export default Body;
