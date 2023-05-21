import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Marquee from "react-fast-marquee";
import GalleryOne from "./galleryOne/GalleryOne";
import GalleryTwo from "./galleryTwo/GalleryTwo";

const Gallery = () => {
	const [photos_one, setPhotos_one] = useState([]);
	const [photos_two, setPhotos_two] = useState([]);

	useEffect(() => {
		fetch("https://toytopia-server-theta.vercel.app/gallery-one")
			.then((res) => res.json())
			.then((data) => setPhotos_one(data));
	}, []);

	useEffect(() => {
		fetch("https://toytopia-server-theta.vercel.app/gallery-two")
			.then((res) => res.json())
			.then((data) => setPhotos_two(data));
	}, []);
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
			<div className="mt-5">
				<Marquee speed={75}>
					{photos_one.map((photo) => (
						<GalleryOne key={photo.id} photo={photo}></GalleryOne>
					))}
				</Marquee>
				<Marquee direction="right" className="mt-5" speed={75}>
					{photos_two.map((photo) => (
						<GalleryTwo key={photo.id} photo={photo}></GalleryTwo>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default Gallery;
