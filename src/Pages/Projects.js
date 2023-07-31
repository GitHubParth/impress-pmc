import React from "react";

const Projects = () => {

	document.title = "Impress | Projects"
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
		</>
	);
};

export default Projects;
