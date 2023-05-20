import React from "react";
import "./AllToyTables.css"
import { Link } from "react-router-dom";

const AllToyTable = ({ toy }) => {
	const { seller_name, toy_name, category, price, rating, _id } = toy;
	return (
		<tr>
			<th>{seller_name}</th>
			<td colSpan={2}>{toy_name}</td>
			<td>{category}</td>
			<td>{price}</td>
			<td>{rating}</td>
			<td>
				<Link className="text-decoration-none">
					<div className="btn btn-details-chart text-zero">
						Details
					</div>
				</Link>
			</td>
			<td className="ms-5 text-zero fs-5">X</td>
		</tr>
	);
};

export default AllToyTable;
