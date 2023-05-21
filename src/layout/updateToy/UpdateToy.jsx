import React, { useContext } from "react";
import useTitle from "../../components/hooks/useTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import { toast } from "react-toastify";

const UpdateToy = () => {
	useTitle("Update a toy");

	const toy = useLoaderData();
	const {
		_id,
		toy_name,
		photo,
		category,
		seller_name,
		seller_email,
		price,
		rating,
		quantity,
		description,
	} = toy;

	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const toy_name_updated = form.toy_name.value;
		const photo_updated = form.url.value;
		const category_updated = form.category.value;
		const seller_name_updated = form.seller_name.value;
		const seller_email_updated = form.seller_email.value;
		const price_updated = form.price.value;
		const rating_updated = form.rating.value;
		const quantity_updated = form.quantity.value;
		const description_updated = form.details.value;

		const updateToy = {
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

		const AfterUpdatedToy = {
			toy_name: toy_name_updated,
			photo: photo_updated,
			category: category_updated,
			seller_name: seller_name_updated,
			seller_email: seller_email_updated,
			price: price_updated,
			rating: rating_updated,
			quantity: quantity_updated,
			description: description_updated,
		};

		fetch(`https://toytopia-server-theta.vercel.app/all-toys/${_id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(AfterUpdatedToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data?.modifiedCount);
				if (data?.modifiedCount <= 0) {
					toast("You didn't update any data 😐");
				} else {
					toast("updated successfully !!");
				}
			});
		navigate("/all-toy");
	};

	return (
		<div>
			<div>
				<div>
					<TopNav></TopNav>
					<div
						className="mx-auto my-5"
						style={{ maxWidth: "1200px" }}
					>
						<div className="display-3 fw-bold text-zero text-center">
							Update your toy
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
											defaultValue={toy_name}
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
											defaultValue={photo}
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
										defaultValue={category}
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
											defaultValue={seller_name}
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
											defaultValue={seller_email}
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
											defaultValue={price}
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
											defaultValue={rating}
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
											<option selected value="5">
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
											defaultValue={quantity}
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
											defaultValue={description}
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
									Update
								</button>
							</div>
						</form>
					</div>
					<div className="bg-footer">
						<Footer></Footer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateToy;
