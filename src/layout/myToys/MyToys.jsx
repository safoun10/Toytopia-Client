import React, { useContext, useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import useTitle from "../../components/hooks/useTitle";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../provider/AuthProvider";
import MySingleToy from "../../components/mySingleToy/MySingleToy";

const MyToys = () => {
	useTitle("My Toys");

	const { user } = useContext(AuthContext);

	const [toys, setToys] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/all-toys")
			.then((res) => res.json())
			.then((data) => {
				const my_toy = data.filter((toy) => toy.email === user.email);
				setToys(my_toy);
			});
	}, []);

	console.log(toys);
	return (
		<div>
			<TopNav></TopNav>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
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
								<th scope="col">Update</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							<>
								{toys.map((toy) => (
									<MySingleToy
										key={toy._id}
										toy={toy}
									></MySingleToy>
								))}
							</>
						</tbody>
					</table>
				</div>
				{toys.length <= 0 && (
					<div className="tex-zero text-center display-4 mb-5">Sorry ! No toys were added by you !</div>
				)}
			</div>

			<div className="bg-footer">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MyToys;
