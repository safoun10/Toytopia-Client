import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete} from "react-icons/ai";

const MySingleToy = ({toy}) => {
    const { seller_name, toy_name, category, price, rating, quantity , _id} =
		toy;
    return (
		<>
			<tr>
				<th colSpan={2}>{seller_name}</th>
				<td colSpan={2}>{toy_name}</td>
				<td>{category}</td>
				<td>{price}</td>
				<td>{rating}</td>
				<td>{quantity}</td>
				<td>
					<Link to={`/update/${_id}`} className="text-decoration-none">
						<div className="btn btn-details-chart text-zero">
							Update
						</div>
					</Link>
				</td>
				<td>
					<AiOutlineDelete className="fs-2 text-zero"></AiOutlineDelete>
				</td>
			</tr>
		</>
	);
};

export default MySingleToy;