import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
// import { toast } from "react-toastify";
import { getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";

const auth = getAuth();
const Login = () => {
	const { loginUser, GoogleProvider } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/home";

	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		loginUser(email, password)
			.then((res) => {
				// toast("Okaeri misutā !!");
				// toast("Welcome Back !!");
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				// toast.error(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				// toast("You have successfully signed in with Google !!");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				// toast.error(err.message);
			});
	};

	return (
		<div className="row align-items-center pt-5">
			<div className="col-md-5 col-11 mx-auto">
				<img
					className="img-fluid"
					src="https://media.istockphoto.com/id/1328825230/vector/multi-factor-authentication-gradient-linear-vector-icon.jpg?s=612x612&w=0&k=20&c=PXI0v9I-VjK4_4fo8zWTJyIQdJM3crJNCI0_AcJRUE8="
					alt="auth"
				/>
			</div>
			<div className="col-md-7 col-11 mx-auto">
				<div className="login-form col-12 mx-auto py-5">
					<div className="display-6 fw-bold text-center pb-2 text-zero">
						Login your account
					</div>
					<hr />
					<form onSubmit={handleLogin} className="mt-5">
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
								Login
							</button>
						</div>
					</form>
					<div className="">
						<div className="display-5 text-three my-3 fw-bold text-center">
							You can also try
						</div>
						<div>
							<div
								onClick={handleGoogleSignIn}
								className="btn border-0 text-white btn-auth w-100 py-2 fw-bold fs-5"
							>
								Login with Google
							</div>
						</div>
					</div>

					<div className="text-center mt-4 text-one fw-bold">
						Don't Have An Account ?
						<Link
							className="text-decoration-none text-danger"
							to={"/register"}
						>
							<span> Register</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
