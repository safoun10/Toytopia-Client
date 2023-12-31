import React, { useEffect, useState } from "react";
import "./ToysByCategory.css";
import SingleToyByCategory from "../singleToyByCategory/SingleToyByCategory";

const ToysByCategory = () => {
	const [toys, setToys] = useState([]);
	const [category, setCategory] = useState("Racing Cars");

	const handleCategory = (state) => {
		setCategory(state);
	};
	useEffect(() => {
		fetch("https://toytopia-server-theta.vercel.app/all-toys")
			.then((res) => res.json())
			.then((data) => {
				const category_data = data.filter(
					(toy) => toy.category === category
				);
				setToys(category_data);
			});
	}, [category]);

	return (
		<div>
			<div className="display-2 mb-5 text-center">Buy our toys !!</div>
			<div className="row w-100 mx-auto">
				<div
					onClick={() => handleCategory("Racing Cars")}
					className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-1"
				>
					Racing Cars
				</div>
				<div
					onClick={() => handleCategory("Trucks")}
					className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-2"
				>
					Trucks
				</div>
				<div
					onClick={() => handleCategory("Emergency Vehicles")}
					className="btn col-md-4 col-11 mx-auto btn-category fs-5 category-3"
				>
					Emergency Vehicles
				</div>
			</div>
			<div className="my-5 d-flex flex-column gap-3">
				{toys.map((toy) => (
					<SingleToyByCategory
						key={toy?._id}
						toy={toy}
					></SingleToyByCategory>
				))}
			</div>
		</div>
	);
};

export default ToysByCategory;
