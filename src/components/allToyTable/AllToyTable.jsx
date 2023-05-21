import React from "react";
import "./AllToyTables.css";
import { Link } from "react-router-dom";

const AllToyTable = ({ toy }) => {
	const { seller_name, toy_name, category, price, rating, quantity, _id } =
		toy;

	return (
		<tr>
			<th colSpan={2}>{seller_name}</th>
			<td colSpan={2}>{toy_name}</td>
			<td>{category}</td>
			<td>{price}</td>
			<td>{rating}</td>
			<td>{quantity}</td>
			<td>
				<Link to={`/details/${_id}`} className="text-decoration-none">
					<div className="btn btn-details-chart text-zero">
						Details
					</div>
				</Link>
			</td>
		</tr>
	);
};

export default AllToyTable;
