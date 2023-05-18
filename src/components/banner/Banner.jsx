import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const Banner = () => {
	return (
		<div className="bg-gradient">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				navigation={true}
				autoplay={true}
				pagination={{ clickable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide className="display-4 text-center bg-img-slide">
                    <div>
                        <div className="display-1">slide 1</div>
                        <div>
                            this is slide one
                        </div>
                        <div>
                            some content
                        </div>
                        <div>
                            some more content
                        </div>
                        <div>
                            some extra content
                        </div>
                    </div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center bg-img-slide">
                    <div>
                        <div className="display-1">slide 2</div>
                        <div>
                            this is slide two
                        </div>
                        <div>
                            some content
                        </div>
                        <div>
                            some more content
                        </div>
                        <div>
                            some extra content
                        </div>
                    </div>
				</SwiperSlide>
				<SwiperSlide className="display-4 text-center bg-img-slide">
                    <div>
                        <div className="display-1">slide 3</div>
                        <div>
                            this is slide three
                        </div>
                        <div>
                            some content
                        </div>
                        <div>
                            some more content
                        </div>
                        <div>
                            some extra content
                        </div>
                    </div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
