import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import useTitle from "../../components/hooks/useTitle";
import Footer from "../../components/footer/Footer";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const Details = () => {
	useTitle("Toy Details");
	const ID = useParams();
	const toy = useLoaderData();

	console.log(toy);

	const {
		photo,
		toy_name,
		email,
		seller_name,
		price,
		rating,
		quantity,
		description,
	} = toy;
	return (
		<div>
			<TopNav></TopNav>
			<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
				<div className="text-zero">
					<div>
						<img
							className="img-fluid rounded-5"
							src={photo}
							alt="photo"
						/>
						<Rating
							className="d-flex justify-content-end me-5"
							initialRating={rating}
							emptySymbol={<BsStar className="fs-5"></BsStar>}
							fullSymbol={
								<BsStarFill className="fs-5"></BsStarFill>
							}
							readonly
							fractions={5}
						/>
					</div>
					<div className="display-2">{toy_name}</div>
					<div className="text-end me-3">
						<div className="display-6">{seller_name}</div>
						<div>{email}</div>
                        <div>${price}</div>
                        <div>{quantity} pieces available</div>
                        <hr />
                        <div className="w-75 ms-auto text-dark">{description}</div>
					</div>
				</div>
			</div>
			<div className="bg-footer">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Details;
