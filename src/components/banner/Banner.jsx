import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
	Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const Banner = () => {
	return (
		<div className="mx-auto" style={{ maxWidth: "1200px" }}>
			<Swiper
				className="d-flex flex-column justify-content-center align-items-center"
				modules={[
					Navigation,
					Autoplay,
					Pagination,
					Scrollbar,
					A11y,
					EffectCoverflow,
				]}
				effect="coverflow"
				coverflowEffect={{
					slideShadows: false,
				}}
				spaceBetween={0}
				loop={true}
				slidesPerView={1}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
				}}
			>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div
						data-aos="zoom-in"
						className="col-lg-6 col-11 mx-auto ps-5"
					>
						<div className="text-zero fw-bold pb-3">ToyTopia</div>
						<div className="text-round fs-3 px-2 fw-bold">
							Where Imagination Takes Flight! 😍😇💕
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div className="col-lg-6 col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">ToyTopia 2</div>
						<div className="text-round fs-3 px-2 fw-bold">
							Where Imagination Takes Flight! 😍😇💕
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div className="col-lg-6 col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">ToyTopia 3</div>
						<div className="text-round fs-3 px-2 fw-bold">
							Where Imagination Takes Flight! 😍😇💕
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div className="col-lg-6 col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">ToyTopia 4</div>
						<div className="text-round fs-3 px-2 fw-bold">
							Where Imagination Takes Flight! 😍😇💕
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div className="col-lg-6 col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">ToyTopia 5</div>
						<div className="text-round fs-3 px-2 fw-bold">
							Where Imagination Takes Flight! 😍😇💕
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
