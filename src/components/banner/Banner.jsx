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
		<div>
			<Swiper className="pt-5"
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
				navigation={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
				}}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 1</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 2</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 1</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 2</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 1</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center">
					<div>
						<div className="display-1">slide 2</div>
						<div>this is slide one</div>
						<div>some content</div>
						<div>some more content</div>
						<div>some extra content</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
