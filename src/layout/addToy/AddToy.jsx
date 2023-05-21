import React from 'react';
import TopNav from "../../components/topNav/TopNav";
import useTitle from "../../components/hooks/useTitle";
import Footer from "../../components/footer/Footer";

const AddToy = () => {
    useTitle("Add a toy")
    return (
		<div>
			<div>
				<TopNav></TopNav>
				<div className="mx-auto" style={{ maxWidth: "1200px" }}>
					sdfu
				</div>
				<div className="bg-footer">
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
};

export default AddToy;