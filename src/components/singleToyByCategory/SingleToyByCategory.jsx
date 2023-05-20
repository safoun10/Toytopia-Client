import React from "react";
import "./SingleToyByCategory.css";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleToyByCategory = ({ toy }) => {
	const {
		_id,
		photo,
		toy_name,
		seller_name,
		price,
		rating,
	} = toy;

	return (
		<div className="row align-items-center card-toy p-5 rounded-3 mx-3">
			<div className="col-11 col-md-6 mx-auto">
				<div>
					<img
						className="img-fluid rounded-3"
						src={photo}
						alt="toy_photo"
					/>
					<div className="d-flex justify-content-end align-items-center mx-2">
						<Rating
							initialRating={rating}
							emptySymbol={<BsStar></BsStar>}
							fullSymbol={<BsStarFill></BsStarFill>}
							readonly
							fractions={5}
						/>
					</div>
				</div>
			</div>
			<div className="col-11 col-md-6 mx-auto">
				<div className="display-5">{toy_name}</div>
				<div className="fw-bold">
					Seller :{" "}
					<span className="fw-light ms-2">{seller_name}</span>
				</div>
				<div className="fw-bold">
					Price :<span className="fw-light ms-3"> ${price}</span>
				</div>

				<Link  className="text-decoration-none text-white">
					<div className="btn btn-details">View Details</div>
				</Link>
			</div>
		</div>
	);
};

export default SingleToyByCategory;
