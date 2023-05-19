import React, { useEffect } from "react";
import "./ToysForKids.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ToysForKids = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div style={{ maxWidth: "1200px" }} className="mx-auto pb-5">
			<div className="display-4 text-center py-5 text-white">
				We design toys not just for kids <br /> but{" "}
				<span className="bg-">with kids</span>
			</div>
			<div className="row">
				<div className="col-11 col-md-6 mx-auto p-3">
					<div data-aos="fade-up-right" data-aos-duration="1000">
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/1044927526/photo/adorable-little-child-playing-with-blue-toy-car-at-home.jpg?s=612x612&w=0&k=20&c=dNv7Njhu04nAvg5WbbXJPUwhllEmV6rKIAVhTWIE0eQ="
							alt="kid with lego"
						/>
						<div className="text-white">
							They love small cars 🙂
						</div>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto p-3">
					<div
						data-aos="fade-up-left"
						data-aos-duration="1000"
						data-aos-delay="500"
					>
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/900683944/photo/portrait-of-little-boy-driving-fast-his-toy-car.jpg?s=612x612&w=0&k=20&c=oL4jZZQFcZpBXG--_fgO2f-CBabUqbvCGgFUQf54GSA="
							alt="kid with lego"
						/>
						<div className="text-white">
							They love excitement !! 🙃
						</div>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto p-3">
					<div
						data-aos="zoom-in"
						data-aos-duration="1000"
						data-aos-delay="500"
					>
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/1046430538/photo/a-young-boss-in-the-car.jpg?s=612x612&w=0&k=20&c=DhjTrKTcu_hNpeuvsuyUtq6wG9Sj8urj7o1_Unyn624="
							alt="kid with lego"
						/>
						<div className="text-white">
							Sometimes they like to act like grownups 😄
						</div>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto p-3">
					<div
						data-aos="zoom-out"
						data-aos-duration="1000"
					>
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/1045975302/photo/smiling-kid-father-leisure-time-man-smile.jpg?s=612x612&w=0&k=20&c=4L8zp6uf6YEhCbqA-nNM76FYTEvo7AjQlsL6M1_g0-M="
							alt="kid with lego"
						/>
						<div className="text-white">
							Playing with children creates bonding between child
							and parent 🥰
						</div>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto p-3">
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="top-bottom"
						data-aos-duration="1000"
					>
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/1190399169/photo/waving-girl.jpg?s=612x612&w=0&k=20&c=vx9b7tN_9UI6BPFc8tOIwSrXvLlukVcmrijHJpbC1rs="
							alt="kid with lego"
						/>
						<div className="text-white">
							Sometimes what they only need is a listener 😊
						</div>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto p-3">
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="top-bottom"
						data-aos-duration="1000"
						data-aos-delay="500"
					>
						<img
							className="img-fluid rounded-3 img-border-custom"
							src="https://media.istockphoto.com/id/931172246/photo/you-get-to-know-your-kids-when-you-play-with-them.jpg?s=612x612&w=0&k=20&c=GBbZOHD3SI-vTfeJTeOcdha3f0D28NZ-thwPzRw6FdQ="
							alt="kid with lego"
						/>
						<div className="text-white">
							Spend more time with your kids , they are precious
							😍
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToysForKids;
