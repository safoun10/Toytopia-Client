import React from 'react';
import "./NewLetter.css"
import { toast } from 'react-toastify';

const NewsLetter = () => {
    const handleSubscribe = () => {

        toast("Thank You for Subscribing to our Weekly Newsletter 😍🥰");

    }
    return (
		<div className="mx-auto my-5 py-5 w-100" style={{ maxWidth: "1200px" }}>
			<div className='row align-items-center justify-content-center gap-3 w-100'>
				<div className='col-8 mx-auto'>
					<div className="display-4 text-center text-white">
						Subscribe for our weekly News Letter !!
					</div>
                    <hr />
					<div className="text-center fs-3 fw-light my-2">
						Get a free toy 👀!
					</div>
                    <div className='d-flex align-items-center justify-content-center mt-4'>
                        <div onClick={handleSubscribe} className='btn w-100 border-custom text-white fs-2 '>Subscribe</div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;