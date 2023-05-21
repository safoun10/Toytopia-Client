import React, { useContext } from "react";
import TopNav from "../../components/topNav/TopNav";
import useTitle from "../../components/hooks/useTitle";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
	useTitle("Add a toy");
	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const toy_name = form.toy_name.value;
		const photo = form.url.value;
		const category = form.category.value;
		const seller_name = form.seller_name.value;
		const seller_email = form.seller_email.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.details.value;

		const newToy = {
			toy_name,
			photo,
			category,
			seller_name,
			seller_email,
			price,
			rating,
			quantity,
			description,
		};

		fetch("http://localhost:5000/all-toys", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		navigate("/");
	};
	return (
		<div>
			<div>
				<TopNav></TopNav>
				<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
					<div className="display-3 fw-bold text-zero text-center">
						Add your own toy
					</div>
					<hr />
					<form onSubmit={handleSubmit} className="">
						<div className="row">
							<div className="col-12">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Toy Name
								</div>
								<div>
									<input
										className="input-field"
										type="text"
										name="toy_name"
										id="text"
										placeholder="Please enter toy name here"
										required
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Toy Photo URL
								</div>
								<div>
									<input
										className="input-field"
										type="url"
										name="url"
										id="url"
										placeholder="Please enter toy photo url here"
										required
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Sub Category
								</div>
								<select
									class="input-field form-select-lg rounded-0"
									name="category"
									defaultValue={"Racing Cars"}
								>
									<option value="Racing Cars">
										Racing Cars
									</option>
									<option value="Trucks">Trucks</option>
									<option value="Emergency Vehicles">
										Emergency Vehicles
									</option>
								</select>
							</div>
							<div className="col-6">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Seller Name
								</div>
								<div>
									<input
										className="input-field"
										type="text"
										name="seller_name"
										id="text"
										placeholder="Please enter seller name here"
										required
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Seller Email
								</div>
								<div>
									<input
										className="input-field"
										type="email"
										name="seller_email"
										id="email"
										required
										defaultValue={user.email}
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Price
								</div>
								<div>
									<input
										className="input-field"
										type="number"
										name="price"
										id="number"
										placeholder="Please enter toy price here"
										required
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Rating
								</div>
								<div>
									<select
										class="input-field form-select-lg rounded-0"
										name="rating"
										defaultValue={"5"}
									>
										<option value="1">&#9733;</option>
										<option value="2">
											&#9733;&#9733;
										</option>
										<option value="3">
											&#9733;&#9733;&#9733;
										</option>
										<option value="4">
											&#9733;&#9733;&#9733;&#9733;
										</option>
										<option value="5">
											&#9733;&#9733;&#9733;&#9733;&#9733;
										</option>
									</select>
								</div>
							</div>
							<div className="col-4">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Quantity
								</div>
								<div>
									<input
										className="input-field"
										type="number"
										name="quantity"
										id="number"
										placeholder="Please enter toy quantity here"
										required
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="fs-5 fw-bold mb-3 text-zero">
									Details
								</div>
								<div>
									<input
										className="input-field"
										type="text"
										name="details"
										id="text"
										placeholder="Please enter toy details here"
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<button
								className="w-100 rounded-2 btn-auth border-0 text-white py-2 fw-bold fs-5 mt-3"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="bg-footer">
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
};

export default AddToy;
