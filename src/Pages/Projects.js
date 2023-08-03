import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';

import { projects } from "../Data";
import { Link } from "react-router-dom";

const Projects = () => {

	document.title = "Impress | Projects";

	return (
		<>
			{/* Who Are We */}
			<section className="flex items-center justify-center gap-8 w-screen h-screen max-h-[700px] bg-projects relative mt-24">
				<div className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] absolute">
					<h1 className="font-Inter font-bold text-lightBlue xl:text-7xl text-6xl px-6 text-center leading-tight">
						Projects
					</h1>
				</div>
				<div className="absolute bg-white about-clip-left w-1/2 lg:h-64 md:h-48 sm:h-40 h-28 bottom-0 left-0" />
				<div className="absolute bg-white about-clip-right w-1/2 lg:h-64 md:h-48 sm:h-40 h-28 bottom-0 right-0" />
			</section>

			{/* Hospitality Projects */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-8 px-6 py-10 md:mt-10 sm:mt-6 mt-4">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-3xl text-center font-bold drop-shadow-lg text-secondary font-Inter md:mb-8 sm:mb-6 mb-5">Hospitality Projects</h1>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					grabCursor={true}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1025: {
							slidesPerView: 3,
						},
					}}
					className="mySwiper w-full h-72 sm:h-72"
				>
					{projects.filter( proj => proj.type === 'hospitality' ).map((proj, i) => (
						<SwiperSlide key={i} className="rounded-xl overflow-hidden group/hosp">
							<Link key={i} className="relative w-full h-full" to={'/projects/' + proj.name.replaceAll(" ", "-")} target="_blank">
								<img src={proj.img[0]} alt={proj.name} className="group-hover/hosp:scale-110 transition-all duration-300 w-full h-full object-cover object-center" />
								<div className="absolute font-Inter top-0 left-0 w-full h-full flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent md:p-4 p-3 px-4">
									<p className="text-white font-semibold text-lg">{proj.name}</p>
									<p className="text-white font-light">{proj.location}</p>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* Residential Projects */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-8 px-6 pb-10 pt-5">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-3xl text-center font-bold drop-shadow-lg text-secondary font-Inter md:mb-8 sm:mb-6 mb-5">Residential Projects</h1>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					grabCursor={true}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1025: {
							slidesPerView: 3,
						},
					}}
					className="mySwiper w-full h-72 sm:h-72"
				>
					{projects.filter( proj => proj.type === 'residential' ).map((proj, i) => (
						<SwiperSlide key={i} className="rounded-xl overflow-hidden group/hosp">
							<Link key={i} className="relative w-full h-full" to={'/projects/' + proj.name.replaceAll(" ", "-")} target="_blank">
								<img src={proj.img[0]} alt={proj.name} className="group-hover/hosp:scale-110 transition-all duration-300 w-full h-full object-cover object-center" />
								<div className="absolute font-Inter top-0 left-0 w-full h-full flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent md:p-4 p-3 px-4">
									<p className="text-white font-semibold text-lg">{proj.name}</p>
									<p className="text-white font-light">{proj.location}</p>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* On-going Projects */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-8 px-6 pb-10 pt-5">
				<h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-3xl text-center font-bold drop-shadow-lg text-secondary font-Inter md:mb-8 sm:mb-6 mb-5">On-going Projects</h1>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					grabCursor={true}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1025: {
							slidesPerView: 3,
						},
					}}
					className="mySwiper w-full h-72 sm:h-72"
				>
					{projects.filter( proj => proj.type === 'ongoing' ).map((proj, i) => (
						<SwiperSlide key={i} className="rounded-xl overflow-hidden group/hosp">
							<Link key={i} className="relative w-full h-full" to={'/projects/' + proj.name.replaceAll(" ", "-")} target="_blank">
								<img src={proj.img[0]} alt={proj.name} className="group-hover/hosp:scale-110 transition-all duration-300 w-full h-full object-cover object-center" />
								<div className="absolute font-Inter top-0 left-0 w-full h-full flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent md:p-4 p-3 px-4">
									<p className="text-white font-semibold text-lg">{proj.name}</p>
									<p className="text-white font-light">{proj.location}</p>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};

export default Projects;
