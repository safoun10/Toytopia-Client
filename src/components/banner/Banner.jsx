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
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="mx-auto d-flex" style={{ maxWidth: "1200px" }}>
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
				loop={false}
				slidesPerView={1}
				autoplay={{
					delay: 22000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
				}}
			>
				<SwiperSlide className="display-1 row d-flex align-items-center">
					<div data-aos="zoom-in" className="col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">
							ToyTopia <sup className="display-4">✨</sup>
						</div>
						<div className="text-secondary fs-5 px-2">
							<TypeAnimation
								sequence={[
									1000,
									"Where Imagination Takes Flight! 😍😇💕",
									1000,
									"Where Sparkle of Joy and Adventure Begins !! 😚",
									1000,
									"Where Magic Comes Alive !! 😮😃",
									1000,
									"Where the Perfect Toy Awaits !! 😍",
									1000,
									"Swipe right 👀 -->",
									1000
								]}
								wrapper="span"
								speed={50}
								cursor={true}
								repeat={Infinity}
								style={{
									fontSize: "2em",
									display: "inline-block",
								}}
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-1 row d-flex align-items-center ms-2">
					<div className="col-11 mx-auto ps-5">
						<div className="text-zero fw-bold pb-3">
							ToyTopia <sup className="display-4">✨</sup>
						</div>
						<div className="fs-5 text-zero">
							Behold, wanderers of wonder! Behold the majesty of
							Toytopia's extraordinary toy collection, where
							dreams dance and playtime reigns supreme. Immerse
							yourself in a magical realm, where toys come alive,
							enchantment fills the air, and pure joy awaits your
							every discovery. Enter, and be forever spellbound!
						</div>
						<div>
							<div className="btn btn-explore">
								<Link className="text-decoration-none text-white fs-5">Explore more 👉</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
