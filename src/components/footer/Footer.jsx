import React from 'react';
import { BsFlower1 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
		<div className="mx-auto my-2" style={{ maxWidth: "1200px" }}>
			<div className="row align-items-center my-5 py-5 w-100">
				<div className='col-11 col-md-3 mx-auto mb-3 display-4'>
					<Link
						to={"/"}
						className="text-decoration-none text-white d-flex flex-column justify-content-center align-items-center gap-2"
					>
						<div className="me-2 display-2">
							<BsFlower1></BsFlower1>
						</div>
						<div>ToyTopia</div>
					</Link>
				</div>
				<div className='col-11 col-md-3 mx-auto mb-3 '>
					<div className="fs-2 mb-4">Address</div>
					<div>404 , Silicon Valley , B.Baria</div>
					<div>
						We would love to have
						<br /> you among us 😍
					</div>
					<div></div>
				</div>
				<div className='col-11 col-md-3 mx-auto mb-3 '>
					<div className="fs-2 mb-4">Contact</div>
					<div>088 000 111 222 333</div>
					<div>care@toytopia.com</div>
					<div>support.mental-health.com</div>
				</div>
				<div className='col-11 col-md-3 mx-auto mb-3 '>
					<div className="fs-2 mb-4">Social Info</div>
					<div>
						<a
							className="text-white text-decoration-none"
							href="https://www.facebook.com/safoun.10"
							target="_blank"
						>
							Facebook
						</a>
					</div>
					<div>
						<a
							className="text-white text-decoration-none"
							href="https://github.com/safoun10"
							target="_blank"
						>Github</a>
					</div>
					<div>InstaGram</div>
				</div>
			</div>
			<div className="fs-6 fw-light text-center">
				Copyright &copy;Toytopia | All rights reserved
			</div>
		</div>
	);
};

export default Footer;