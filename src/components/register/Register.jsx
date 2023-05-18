import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
	// const [err, setErr] = useState("");

	const navigate = useNavigate();

	// const errorPop = (message) => {
	// 	toast.error(message);
	// };

	const handleRegister = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const url = form.url.value;
		const text = form.text.value;
		const password = form.password.value;

		if (password.length < 6) {
			// setErr("Password must be 6 characters or more ");
			// toast.error(err);
			return;
		} else {
			createUser(email, password)
				.then((res) => {
					// toast("Arigato gozaimasu !!");
					// toast("Account created successfully");
					form.reset();
					navigate("/home");
				})
				.catch((error) => {
					// setErr(error.message);
					// const errorMessage = err;
					// errorPop(err);
					console.log(error.message);
				});
		}
	};

	return (
		<div>
			<div className="row align-items-center pt-5">
				<div className="col-md-7 col-11 mx-auto">
					<div className="login-form col-12 mx-auto py-5">
						<div className="display-6 fw-bold text-center pb-2 text-zero">
							Register your account
						</div>
						<hr />
						<form onSubmit={handleRegister} className="mt-5">
							<div>
								<div className="fs-5 fw-bold mb-3 text-two">
									Your Name
								</div>
								<div>
									<input
										className="input-field"
										type="text"
										name="text"
										id="text"
										placeholder="Please enter your name here"
										required
									/>
								</div>
							</div>
							<div>
								<div className="fs-5 text-two fw-bold mb-3 title-text">
									Photo URL
								</div>
								<div>
									<input
										className="input-field"
										placeholder="Enter Your Photo URL"
										type="url"
										name="url"
										id="url"
									/>
								</div>
							</div>
							<div>
								<div className="fs-5 fw-bold mb-3 text-two">
									Email address
								</div>
								<div>
									<input
										className="input-field"
										type="email"
										name="email"
										id="email"
										placeholder="Please enter your email address here"
										required
									/>
								</div>
							</div>
							<div>
								<div className="fs-5 fw-bold mb-3 text-two">
									Password
								</div>
								<div>
									<input
										className="input-field"
										type="password"
										name="password"
										id="password"
										placeholder="Please enter your password here"
										required
									/>
								</div>
							</div>

							<div>
								<button
									className="w-100 rounded-2 btn-auth border-0 text-white py-2 fw-bold fs-5 mt-3"
									type="submit"
								>
									Register
								</button>
							</div>
						</form>

						<div className="text-center mt-4 text-one fw-bold">
							Already Have An Account ?
							<Link
								className="text-decoration-none text-danger"
								to={"/login"}
							>
								<span> Login</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-5 col-11 mx-auto">
					<img
						className="img-fluid"
						src="https://media.istockphoto.com/id/1196128034/vector/secure-login.jpg?s=612x612&w=0&k=20&c=q9aIb_oUVKkgFod87_mMFEwzFOA9WZfHOPDi0741rvY="
						alt="auth"
					/>
				</div>
			</div>
		</div>
	);
};

export default Register;
