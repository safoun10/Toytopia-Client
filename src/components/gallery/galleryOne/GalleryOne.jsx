import React from "react";

const GalleryOne = ({ photo }) => {
	return (
		<div>
			<div>
				<img
					className="mx-3 rounded-4 img-responsive img-fluid"
					src={photo.url}
					alt="photo"
				/>
			</div>
		</div>
	);
};

export default GalleryOne;
