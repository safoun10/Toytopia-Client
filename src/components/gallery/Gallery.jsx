import React from "react";
import "./Gallery.css"
import Marquee from "react-fast-marquee";

const Gallery = () => {
	return (
		<div>
			<div className="gallery-text">
				<div className="display-2 fw-bold text-zero">
					Toytopia Delights
				</div>
				<div className="fs-4 ms-4 my-2">
					{" "}
					A Captivating Gallery Where Kids' Dreams Come Alive!
				</div>
			</div>
		</div>
	);
};

export default Gallery;
