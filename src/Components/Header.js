import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const openMenu = () => {

	}

	const closeMenu = () => {
		
	}

	return (
		<>
			<nav className="fixed top-0 left-0 flex items-center justify-between xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 w-full h-24 bg-primary font-Inter z-40">
				<Link className="h-full py-3.5" to="/">
					<img
						src="/images/logo/logo.webp"
						alt=""
						className="w-full h-14 mt-1 sm:mt-0 sm:h-full"
					/>
				</Link>
				<ul className="md:flex hidden items-center justify-center gap-8 h-full">
					<Link className="h-full" to="/">
						<li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
							Home
						</li>
					</Link>
					<Link className="h-full" to="/about">
						<li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
							About Us
						</li>
					</Link>
					<Link className="h-full" to="/projects">
						<li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
							Projects
						</li>
					</Link>
					<Link className="h-full" to="/faqs">
						<li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
							FAQs
						</li>
					</Link>
					<Link
						className="md:flex hidden relative group/ctabtn"
						target="_black"
						onClick={(e) => {
							e.preventDefault();
							setTimeout(() => {
								navigate("/contact");
							}, 200);
						}}
					>
						<button
							onClick={() => {
								document
									.querySelector("#ctabtn")
									.classList.add("animate-ctaBtn");
								setTimeout(() => {
									document
										.querySelector("#ctabtn")
										.classList.remove("animate-ctaBtn");
								}, 150);
							}}
							id="ctabtn"
							className="bg-primaryYellow rounded z-10 w-full button-2 lg:p-3 p-2 lg:px-5 px-4 text-secondary font-medium relative group-hover/ctabtn:-skew-x-12 transition-all duration-300"
						>
							Contact Us
						</button>
						<div className="absolute rounded group-hover/ctabtn:-skew-x-12 top-0 group-hover/ctabtn:top-1.5 left-0 group-hover/ctabtn:left-1.5 h-full w-full bg-secondary z-0 transition-all duration-300" />
					</Link>
				</ul>
				<button
					className="md:hidden"
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.remove("translate-x-60");
						mobileOverlay.classList.remove("invisible");
						document.body.classList.add("disable-scrolling");
					}}
				>
					<svg
						fill="currentColor"
						className="w-9 h-9 text-white"
						viewBox="0 0 16 16"
					>
						<path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
					</svg>
				</button>
			</nav>

			{/* Mobile Side menu */}
			<div
				id="mobileMenu"
				className="fixed top-0 right-0 translate-x-60 h-full min-h-screen pt-16 pb-10 overflow-y-scroll w-60 flex items-center justify-start flex-col gap-6 bg-black font-Inter z-50 transition-all duration-300"
			>
				<button
					className="absolute top-5 right-5"
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
					}}
				>
					<svg
						fill="currentColor"
						className="w-5 h-5 text-white"
						viewBox="0 0 16 16"
					>
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
					</svg>
				</button>
				<Link
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
					}}
					className="h-10"
					to="/"
				>
					<p className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
						Home
					</p>
				</Link>
				<Link
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
					}}
					className="h-10"
					to="/about"
				>
					<p className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
						About Us
					</p>
				</Link>
				<Link
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
					}}
					className="h-10"
					to="/projects"
				>
					<p className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
						Projects
					</p>
				</Link>
				<Link
					onClick={() => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
					}}
					className="h-10"
					to="/faqs"
				>
					<p className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">
						FAQs
					</p>
				</Link>
				<Link
					className="flex relative group/ctabtn"
					target="_black"
					onClick={(e) => {
						let mobileMenu = document.querySelector("#mobileMenu");
						let mobileOverlay =
							document.querySelector("#mobileOverlay");
						mobileMenu.classList.add("translate-x-60");
						mobileOverlay.classList.add("invisible");
						document.body.classList.remove("disable-scrolling");
						e.preventDefault();
						setTimeout(() => {
							navigate("/contact");
						}, 200);
					}}
				>
					<button
						onClick={() => {
							document
								.querySelector("#ctabtn")
								.classList.add("animate-ctaBtn");
							setTimeout(() => {
								document
									.querySelector("#ctabtn")
									.classList.remove("animate-ctaBtn");
							}, 150);
						}}
						id="ctabtn"
						className="bg-primaryYellow rounded z-10 w-full button-2 lg:p-3 p-2 lg:px-5 px-4 text-secondary font-medium relative group-hover/ctabtn:-skew-x-12 transition-all duration-300"
					>
						Contact Us
					</button>
					<div className="absolute rounded group-hover/ctabtn:-skew-x-12 top-0 group-hover/ctabtn:top-1.5 left-0 group-hover/ctabtn:left-1.5 h-full w-full bg-secondary z-0 transition-all duration-300" />
				</Link>
			</div>

			{/* Overlay */}
			{/* <div id="mobileOverlay" className="fixed top-0 left-0 w-[calc(100vw-15rem)] h-screen bg-[rgba(0,0,0,0.7)]" /> */}
			<div
				id="mobileOverlay"
				className="fixed invisible top-0 left-0 w-screen z-40 h-screen bg-[rgba(0,0,0,0.7)]"
			/>
		</>
	);
};

export default Header;
