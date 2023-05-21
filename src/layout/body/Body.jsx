import React from "react";
import Banner from "../../components/banner/Banner";
import "./Body.css";
import TopNav from "../../components/topNav/TopNav";
import ToysForKids from "../../components/toysForKids/ToysForKids";
import Gallery from "../../components/gallery/Gallery";
import useTitle from "../../components/hooks/useTitle";
import Footer from "../../components/footer/Footer";
import ToysByCategory from "../../components/toysByCategory/ToysByCategory";
import NewsLetter from "../../components/newsLetter/NewsLetter";

const Body = () => {
	useTitle("Home");
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
			<div className="mx-auto my-5 px-2" style={{ maxWidth: "1200px" }}>
				<Gallery></Gallery>
			</div>
			<div className="bg-footer">
				<NewsLetter></NewsLetter>
			</div>
			<div className="mx-auto my-5" style={{maxWidth : "1200px"}}>
				<ToysByCategory></ToysByCategory>
			</div>
			<div className="bg-footer">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Body;
