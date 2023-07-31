import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperData, serviceData, testimonials } from "../Data";

// Import Swiper styles
import "swiper/css";

const HomePage = () => {
	const [videoStatus, setVideoStatus] = useState(true);
	const [mySwiper, setMySwiper] = useState(null);

	const heroVideo = useRef();

	document.title = "Impress PMC"

	return (
		<>
			{/* Hero Section */}
			<section className="flex items-center justify-center gap-8 relative w-screen h-full mt-24 bg-hero-section">
				{/* Info Div */}
				<div className="w-full h-full sm:min-h-screen md:min-h-[calc(100vh-6rem)] flex md:flex-row flex-col items-center justify-center xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 md:gap-6 sm:gap-10 gap-8 bg-[rgba(0,0,0,0.85)] md:py-0 py-10">
					{/* Main Info */}
					<div className="w-full md:w-1/2 h-fit flex flex-col items-start justify-center xl:gap-7 lg:gap-6 md:gap-4 gap-5">
						<h3 className="xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl text-4xl leading-none font-Inter font-semibold text-primaryYellow text-center">
							Impress PMC
						</h3>
						<p className="xl:text-2xl lg:text-xl md:text-base sm:text-lg text-base font-Inter text-primary w-full xl:max-w-[600px] lg:max-w-[500px]">
							At Impress, we specialize in providing top-notch
							project management consultancy services tailored to
							meet the unique needs of our clients.
						</p>
						<Link
							to="/contact"
							className="bg-primaryYellow xl:px-7 md:px-5 px-6 xl:py-3.5 md:py-3 py-2 lg:text-lg lg:rounded-lg sm:rounded-md rounded font-Inter text-secondary transition-all duration-500 hover:translate-x-2"
						>
							Contact Us
						</Link>
					</div>
					{/* Video Section */}
					<div className="w-full md:w-1/2 relative">
						<button
							className="absolute top-[52%] left-[52%] translate-x-[-50%] translate-y-[-50%] text-primaryYellow z-10 md:hover:scale-110 transition-all duration-200 drop-shadow-primary md:w-[80px] md:h-[80px] w-[50px] h-[50px] !outline-none"
							onClick={() => {
								if (videoStatus) heroVideo.current.play();
								else heroVideo.current.pause();
								setVideoStatus(!videoStatus);
							}}
						>
							{videoStatus === true ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="currentWidth"
									height="currentHeight"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="currentWidth"
									height="currentHeight"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
								</svg>
							)}
						</button>
						<video
							ref={heroVideo}
							loop
							src="/videos/hero-video.mp4"
							className="rounded-lg w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 py-20">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-3xl text-center font-bold drop-shadow-lg text-secondary font-Inter mb-10">
					Our Achievements
				</h1>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-10 gap-8">
					<div className="flex flex-col items-center justify-center gap-2 font-Inter bg-lightBlue py-10 px-4 w-full rounded-lg shadow-xl sm:hover:scale-110 transition-all duration-300">
						<p className="lg:text-5xl sm:text-4xl text-5xl font-bold text-primaryGreen">
							<CountUp end={16} duration={4} />+
						</p>
						<p className="text-xl font-semibold text-primaryGreen text-center">
							Years of Experience
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 font-Inter bg-lightBlue py-10 px-4 w-full rounded-lg shadow-xl sm:hover:scale-110 transition-all duration-300">
						<p className="lg:text-5xl sm:text-4xl text-5xl font-bold text-primaryGreen">
							<CountUp end={40} duration={6} />+
						</p>
						<p className="text-xl font-semibold text-primaryGreen text-center">
							Projects Completed
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 font-Inter bg-lightBlue py-10 px-4 w-full rounded-lg shadow-xl sm:hover:scale-110 transition-all duration-300">
						<p className="lg:text-5xl sm:text-4xl text-5xl font-bold text-primaryGreen">
							<CountUp end={200} duration={8} />+
						</p>
						<p className="text-xl font-semibold text-primaryGreen text-center">
							Staff Members
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 font-Inter bg-lightBlue py-10 px-4 w-full rounded-lg shadow-xl sm:hover:scale-110 transition-all duration-300">
						<p className="lg:text-5xl sm:text-4xl text-5xl font-bold text-primaryGreen">
							<CountUp end={100} duration={4} />%
						</p>
						<p className="text-xl font-semibold text-primaryGreen text-center">
							Satisfaction
						</p>
					</div>
				</div>
			</section>

			{/* Our Approach */}
			<section className="w-full h-full pt-4 pb-16">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-4xl mb-8 sm:mb-10 md:mb-12 drop-shadow-lg text-center font-bold text-secondary font-Inter xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8">
					Our Approach
				</h1>
				<div className="w-full h-full relative xl:px-20 lg:px-14 md:px-12 sm:px-10 px-6">
					<Swiper
						className="mySwiper w-full h-full"
						slidesPerView={1}
						slidesPerGroup={1}
						loop={true}
						breakpoints={{
							769: {
								slidesPerView: 2,
								slidesPerGroup: 2,
							},
						}}
						spaceBetween={20}
					>
						{swiperData.map((slide, i) => (
							<SwiperSlide
								key={i}
								className="rounded-lg overflow-hidden !h-[400px] sm:!h-[450px] md:!h-[500px] lg:!h-[580px] xl:!h-[500px] group/slider"
							>
								<img
									src={slide.img}
									className="w-full h-full rounded-md object-cover object-center"
									alt=""
								/>
								<div className="w-full lg:h-16 sm:h-[60px] h-[56px] absolute bottom-0 left-0 bg-[rgba(0,0,0,0.8)] font-Inter p-3.5 group-hover/slider:px-4 sm:group-hover/slider:px-7 group-hover/slider:py-5 sm:group-hover/slider:py-7 lg:group-hover/slider:py-6 xl:group-hover/slider:py-10 group-hover/slider:h-full transition-all duration-300">
									<p className="lg:text-3xl sm:text-2xl text-xl text-lightBlue font-bold mb-2 sm:group-hover/slider:mb-3">
										{slide.title}
									</p>
									<p className="text-lightBlue lg:text-lg sm:text-base text-sm sm:leading-normal leading-relaxed tracking-wide px-0 md:px-1 pb-10 md:pb-10 pr-2 overflow-y-scroll no-scrollbar h-full font-extralight">
										{slide.desc}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Our Services */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 py-10">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-4xl mb-3 text-center drop-shadow-lg font-bold text-secondary font-Inter xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8">
					Our Services
				</h1>
				<p className="md:w-[50%] mx-auto w-full mb-8 sm:mb-10 md:mb-12 text-center text-lg font-light font-Inter">
					Partner with us to take your projects to new heights and
					experience the benefits of professional PMC services
				</p>
				<div className="w-full h-full grid lg:grid-cols-3 lg:gap-5 gap-6 sm:grid-cols-2 grid-cols-1">
					{serviceData.map((service, i) => (
						<div key={i} className="w-full h-full font-Inter flex flex-col items-center justify-start gap-2 px-6 py-7 rounded-md transition-all duration-300 hover:drop-shadow-black bg-lightBlue text-primaryGreen">
							<p>{service.svg}</p>
							<p className="font-semibold md:text-2xl text-xl mt-2 mb-0.5 text-center">
								{service.title}
							</p>
							<p className="font-light text-black text-sm text-center">
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Client Testimonials */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 py-10">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-4xl mb-3 text-center drop-shadow-lg font-bold text-secondary font-Inter xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8">
					Client Testimonials
				</h1>
				<p className="md:w-[50%] mx-auto w-full mb-8 sm:mb-10 md:mb-12 text-center text-lg font-light font-Inter">
					Partner with us to take your projects to new heights and
					experience the benefits of professional PMC services
				</p>
				<div className="w-full  h-full relative">
					<button
						className="absolute top-[50%] translate-y-[-50%] left-0 text-black z-10"
						onClick={() => {
							mySwiper.slidePrev();
						}}
					>
						<svg
							fill="currentColor"
							className="h-10 w-10 -rotate-45"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
							/>
						</svg>
					</button>
					<button
						className="absolute top-[50%] translate-y-[-50%] right-0 text-black z-10"
						onClick={() => {
							mySwiper.slideNext();
						}}
					>
						<svg
							fill="currentColor"
							className="h-10 w-10 rotate-[135deg]"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
							/>
						</svg>
					</button>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop
						onSwiper={(s) => setMySwiper(s)}
						className="mySwiper w-full max-w-[1000px] mx-auto relative"
					>
						<svg
							viewBox="0 0 95 76"
							fill="none"
							className="w-20 h-20 absolute top-0 left-0"
						>
							<path
								d="M92.3611 69.08C92.3611 70.9261 90.8646 72.4226 89.0185 72.4226L55.9445 72.4226C54.0984 72.4226 52.6019 70.9261 52.6019 69.08L52.6019 34.6002C52.6019 33.9578 52.787 33.329 53.135 32.7891L71.5841 4.17032C72.1995 3.21564 73.2577 2.63882 74.3935 2.63882L78.1827 2.63882C80.6168 2.63882 82.2347 5.15736 81.2227 7.37115L73.9528 23.2738C71.3428 28.983 75.5153 35.4782 81.7928 35.4782L89.0185 35.4782C90.8646 35.4782 92.3611 36.9747 92.3611 38.8208L92.3611 69.08Z"
								stroke="url(#paint0_linear_60_537)"
								strokeWidth={5.27778}
							/>
							<path
								d="M42.3982 69.08C42.3982 70.9261 40.9017 72.4226 39.0556 72.4226L5.98157 72.4226C4.13551 72.4226 2.63898 70.9261 2.63898 69.08L2.63898 34.6002C2.63898 33.9578 2.82409 33.329 3.17215 32.7891L21.6212 4.17032C22.2366 3.21564 23.2948 2.63882 24.4306 2.63882L28.2198 2.63882C30.6539 2.63882 32.2718 5.15736 31.2598 7.37115L23.9899 23.2738C21.3799 28.983 25.5524 35.4782 31.8299 35.4782L39.0556 35.4782C40.9017 35.4782 42.3982 36.9747 42.3982 38.8208L42.3982 69.08Z"
								stroke="url(#paint1_linear_60_537)"
								strokeWidth={5.27778}
							/>
							<defs>
								<linearGradient
									id="paint0_linear_60_537"
									x1={72.4815}
									y1={75.0615}
									x2={72.4815}
									y2={-0.0000630038}
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#B4D2FF" />
									<stop offset={1} stopColor="#D0E3FF" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_60_537"
									x1={22.5186}
									y1={75.0615}
									x2={22.5186}
									y2={-0.0000630038}
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#B4D2FF" />
									<stop offset={1} stopColor="#D0E3FF" />
								</linearGradient>
							</defs>
						</svg>
						<svg
							viewBox="0 0 95 76"
							fill="none"
							className="w-20 h-20 absolute top-0 right-0 rotate-180"
						>
							<path
								d="M92.3611 69.08C92.3611 70.9261 90.8646 72.4226 89.0185 72.4226L55.9445 72.4226C54.0984 72.4226 52.6019 70.9261 52.6019 69.08L52.6019 34.6002C52.6019 33.9578 52.787 33.329 53.135 32.7891L71.5841 4.17032C72.1995 3.21564 73.2577 2.63882 74.3935 2.63882L78.1827 2.63882C80.6168 2.63882 82.2347 5.15736 81.2227 7.37115L73.9528 23.2738C71.3428 28.983 75.5153 35.4782 81.7928 35.4782L89.0185 35.4782C90.8646 35.4782 92.3611 36.9747 92.3611 38.8208L92.3611 69.08Z"
								stroke="url(#paint0_linear_60_537)"
								strokeWidth={5.27778}
							/>
							<path
								d="M42.3982 69.08C42.3982 70.9261 40.9017 72.4226 39.0556 72.4226L5.98157 72.4226C4.13551 72.4226 2.63898 70.9261 2.63898 69.08L2.63898 34.6002C2.63898 33.9578 2.82409 33.329 3.17215 32.7891L21.6212 4.17032C22.2366 3.21564 23.2948 2.63882 24.4306 2.63882L28.2198 2.63882C30.6539 2.63882 32.2718 5.15736 31.2598 7.37115L23.9899 23.2738C21.3799 28.983 25.5524 35.4782 31.8299 35.4782L39.0556 35.4782C40.9017 35.4782 42.3982 36.9747 42.3982 38.8208L42.3982 69.08Z"
								stroke="url(#paint1_linear_60_537)"
								strokeWidth={5.27778}
							/>
							<defs>
								<linearGradient
									id="paint0_linear_60_537"
									x1={72.4815}
									y1={75.0615}
									x2={72.4815}
									y2={-0.0000630038}
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#B4D2FF" />
									<stop offset={1} stopColor="#D0E3FF" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_60_537"
									x1={22.5186}
									y1={75.0615}
									x2={22.5186}
									y2={-0.0000630038}
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#B4D2FF" />
									<stop offset={1} stopColor="#D0E3FF" />
								</linearGradient>
							</defs>
						</svg>
						{testimonials.map((rev, i) => (
							<SwiperSlide key={i}>
								<div className="flex flex-col items-center justify-center relative">
									<img
										src={rev.img}
										className="w-36 h-36 object-cover object-center rounded-full"
										alt=""
									/>
									<div className="flex items-center justify-center gap-2 mt-4">
										<svg fill="currentColor" className="w-5 text-yellow-400" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg>
										<svg fill="currentColor" className="w-5 text-yellow-400" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg>
										<svg fill="currentColor" className="w-5 text-yellow-400" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg>
										<svg fill="currentColor" className="w-5 text-yellow-400" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg>
										<svg fill="currentColor" className="w-5 text-yellow-400" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg>
									</div>
									<h2 className="text-3xl font-bold font-Inter text-secondary mt-3">
										{rev.name}
									</h2>
									<p className="font-Inter font-light text-lg text-secondary">
										- {rev.designation}
									</p>
									<p className="font-Inter font-light text-center text-gray-500 mt-3">
										{rev.review}.
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default HomePage;
