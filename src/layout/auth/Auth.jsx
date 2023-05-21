import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';

const Auth = () => {
    return (
		<div>
			<TopNav></TopNav>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
				<Outlet></Outlet>
			</div>
			<div className='bg-footer'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Auth;