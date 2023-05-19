import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { BallTriangle, TailSpin, Watch } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					minHeight: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TailSpin
					height="200"
					width="200"
					// radius="48"
					color="#A084DC"
					ariaLabel="watch-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				/>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
