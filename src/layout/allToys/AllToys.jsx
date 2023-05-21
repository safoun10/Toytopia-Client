import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import useTitle from "../../components/hooks/useTitle";
import AllToyTable from "../../components/allToyTable/AllToyTable";
import Footer from "../../components/footer/Footer";

const AllToys = () => {
	useTitle("All Toys");

	const [toys, setToys] = useState([]);

	useEffect(() => {
		fetch("https://toytopia-server-theta.vercel.app/all-toys")
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, []);
	return (
		<div>
			<TopNav></TopNav>
			<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
				<table className="table table-striped">
					<thead>
						<tr className="table-dark">
							<th colSpan={2} scope="col">
								Seller
							</th>
							<th colSpan={2} scope="col">
								Toy Name
							</th>
							<th scope="col">Sub Category</th>
							<th scope="col">Price</th>
							<th scope="col">Rating</th>
							<th scope="col">Quantity</th>
							<th scope="col">Details</th>
						</tr>
					</thead>
					<tbody>
						<>
							{toys.map((toy) => (
								<AllToyTable
									key={toy._id}
									toy={toy}
								></AllToyTable>
							))}
						</>
					</tbody>
				</table>
			</div>
			<div className="bg-footer">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AllToys;
