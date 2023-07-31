import { React } from "react";

import { ourTeam } from "../Data";

const AboutUs = () => {

	document.title = "Impress | About Us"

	return (
		<>
            {/* Who Are We */}
			<section className="flex items-center justify-center gap-8 w-screen h-screen max-h-[700px] bg-about-us relative mt-24">
				<div className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] absolute">
					<h1 className="font-Inter font-bold text-lightBlue xl:text-7xl text-6xl px-6 text-center leading-tight">
						Who Are We
					</h1>
				</div>
				<div className="absolute bg-white about-clip-left w-1/2 lg:h-64 md:h-48 sm:h-40 h-28 bottom-0 left-0" />
				<div className="absolute bg-white about-clip-right w-1/2 lg:h-64 md:h-48 sm:h-40 h-28 bottom-0 right-0" />
			</section>

            {/* About Us */}
			<section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 my-16">
				<h1 className="xl:text-7xl md:text-6xl text-5xl text-center font-bold drop-shadow-lg text-secondary font-Inter md:mb-8 mb-5">
					About Us
				</h1>
				<p className="font-Inter font-light text-justify text-secondary w-full sm:text-xl">
					Well-established in November 2017, ImpressPMC is a single
					package of solution providers when it comes to Project
					Management. From stem to stern, we take care of each and
					every aspect of the project. Along with expert consulting
					and advise, we help each client to reach their goal with the
					best cost and budget, without any loss on the quality. For
					ImpressPMC, each client is unique and every project is
					important. Along with residential and commercial
					constructions, we are heavily involved and are specialized
					in hospitality infrastructure.
				</p>
			</section>

            {/* Our Vision | Our Mission */}
			<section className="grid md:grid-cols-2 gap-y-10 gap-x-4 w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 py-20 bg-lightBlue">
				<div className="font-Inter flex flex-col sm:items-start items-center">
					<svg viewBox="0 0 500 500" className="w-[120px] text-secondary" fill="currentColor" >
						<g>
							<path d="M183.592,112.704l-6.984-14.392c-5,2.424-9.952,5.144-14.712,8.064l8.376,13.64 C174.584,117.36,179.064,114.896,183.592,112.704z" />
							<path d="M212.072,102.288l-3.936-15.504c-5.408,1.368-10.808,3.04-16.056,4.952l5.496,15.032 C202.312,105.04,207.192,103.528,212.072,102.288z" />
							<path d="M135.56,149.312l-12.024-10.56c-3.68,4.192-7.184,8.616-10.432,13.152l13.016,9.312 C129.056,157.104,132.232,153.104,135.56,149.312z" />
							<path d="M146.152,138.408c3.68-3.448,7.584-6.744,11.6-9.808l-9.704-12.72c-4.44,3.384-8.752,7.032-12.832,10.832 L146.152,138.408z" />
							<path d="M224.616,83.464l2.344,15.832c5.024-0.744,10.112-1.248,15.136-1.496l-0.792-15.984 C235.768,82.096,230.152,82.648,224.616,83.464z" />
							<path d="M402.856,181.056c-2.288-5.104-4.848-10.144-7.616-14.96l-13.872,7.968c2.504,4.36,4.824,8.912,6.888,13.536 L402.856,181.056z" />
							<path d="M364.072,126.76c-4.064-3.808-8.376-7.456-12.816-10.832l-9.704,12.72c4.008,3.064,7.912,6.36,11.592,9.808 L364.072,126.76z" />
							<path d="M96.424,180.944l14.592,6.56c2.072-4.616,4.4-9.168,6.896-13.528l-13.872-7.968 C101.28,170.824,98.712,175.848,96.424,180.944z" />
							<path d="M272.384,99.312l2.392-15.832c-5.488-0.832-11.112-1.384-16.704-1.664L257.28,97.8 C262.344,98.056,267.432,98.56,272.384,99.312z" />
							<path d="M337.432,106.424c-4.768-2.936-9.72-5.656-14.72-8.08l-6.968,14.408c4.512,2.176,8.984,4.64,13.296,7.296 L337.432,106.424z" />
							<path d="M287.272,102.32c4.856,1.24,9.736,2.76,14.496,4.504l5.504-15.032c-5.264-1.92-10.664-3.592-16.032-4.968L287.272,102.32 z" />
							<path d="M363.712,149.352c3.344,3.832,6.52,7.832,9.44,11.92l13.016-9.312c-3.224-4.504-6.728-8.928-10.416-13.144 L363.712,149.352z" />
							<path d="M226.848,399.92l-2.392,15.832c5.488,0.832,11.112,1.384,16.704,1.664l0.792-15.984 C236.888,401.176,231.8,400.672,226.848,399.92z" />
							<path d="M274.616,415.768l-2.344-15.832c-5.024,0.744-10.112,1.248-15.136,1.496l0.792,15.984 C263.464,417.136,269.08,416.584,274.616,415.768z" />
							<path d="M315.64,386.528l6.984,14.392c5-2.424,9.952-5.144,14.712-8.064l-8.368-13.64 C324.648,381.872,320.168,384.336,315.64,386.528z" />
							<path d="M287.16,396.944l3.936,15.504c5.408-1.368,10.808-3.04,16.056-4.952l-5.496-15.032 C296.92,394.192,292.04,395.704,287.16,396.944z" />
							<path d="M353.08,360.824c-3.68,3.448-7.584,6.744-11.6,9.808l9.704,12.72c4.44-3.384,8.752-7.032,12.832-10.832L353.08,360.824z" />
							<path d="M402.808,318.288l-14.592-6.56c-2.072,4.616-4.4,9.168-6.896,13.528l13.872,7.968 C397.952,328.408,400.52,323.384,402.808,318.288z" />
							<path d="M161.8,392.808c4.768,2.936,9.72,5.656,14.72,8.08l6.968-14.408c-4.512-2.176-8.984-4.64-13.296-7.296L161.8,392.808z" />
							<path d="M363.672,349.92l12.024,10.56c3.68-4.192,7.184-8.616,10.432-13.152l-13.016-9.312 C370.176,342.128,367,346.128,363.672,349.92z" />
							<path d="M135.52,349.88c-3.344-3.832-6.52-7.832-9.44-11.92l-13.016,9.312c3.224,4.504,6.728,8.928,10.416,13.144L135.52,349.88z " />
							<path d="M135.16,372.472c4.064,3.808,8.376,7.456,12.816,10.832l9.704-12.72c-4.008-3.064-7.912-6.36-11.592-9.808 L135.16,372.472z" />
							<path d="M96.376,318.176c2.288,5.104,4.848,10.144,7.616,14.96l13.872-7.968c-2.504-4.36-4.824-8.912-6.888-13.536 L96.376,318.176z" />
							<path d="M211.96,396.912c-4.856-1.24-9.736-2.76-14.496-4.504l-5.504,15.032c5.264,1.92,10.664,3.592,16.032,4.968 L211.96,396.912z" />
							<polygon points="241.616,24.568 241.616,65.616 257.616,65.616 257.616,24.568 293.176,48.272 302.056,34.96 249.616,0  197.176,34.96 206.056,48.272  " />
							<polygon points="84.824,96.136 113.848,125.16 125.16,113.848 96.136,84.824 138.048,76.448 134.912,60.76 73.112,73.12  60.752,134.904 76.44,138.048  " />
							<polygon points="125.16,385.384 113.848,374.072 84.824,403.096 76.44,361.184 60.752,364.328 73.112,426.12 134.912,438.472  138.048,422.784 96.136,414.408  " />
							<polygon points="257.616,474.664 257.616,433.616 241.616,433.616 241.616,474.664 206.056,450.96 197.176,464.272  249.616,499.232 302.056,464.272 293.176,450.96  " />
							<polygon points="414.408,403.096 385.384,374.072 374.072,385.384 403.096,414.408 361.184,422.784 364.32,438.472  426.12,426.12 438.48,364.328 422.792,361.184  " />
							<polygon points="374.072,113.848 385.384,125.16 414.408,96.136 422.792,138.048 438.48,134.904 426.12,73.12 364.32,60.76  361.184,76.448 403.096,84.824  " />
							<path d="M449.616,201.616c-9.472,0-18.632,3-26.52,8.32c-36.504-25.672-96.256-56.32-173.48-56.32s-136.976,30.648-173.48,56.32 c-7.896-5.32-17.056-8.32-26.52-8.32c-26.472,0-48,21.528-48,48s21.528,48,48,48c9.472,0,18.632-3,26.52-8.32 c36.504,25.672,96.256,56.32,173.48,56.32s136.976-30.648,173.48-56.32c7.888,5.32,17.048,8.32,26.52,8.32 c26.472,0,48-21.528,48-48S476.088,201.616,449.616,201.616z M49.616,281.616c-17.648,0-32-14.352-32-32s14.352-32,32-32 c4.336,0,8.568,1.008,12.536,2.752c-16.216,12.8-25.368,22.672-26.456,23.864l-4.896,5.384L35.696,255 c1.088,1.192,10.24,11.064,26.456,23.864C58.192,280.608,53.952,281.616,49.616,281.616z M52.928,249.608 c15.448-14.72,63.376-55.472,133.848-72.392c-20.272,17.608-33.16,43.504-33.16,72.4c0,28.88,12.872,54.752,33.12,72.368 C116.392,305.04,68.384,264.304,52.928,249.608z M249.616,329.616c-44.112,0-80-35.888-80-80s35.888-80,80-80s80,35.888,80,80 S293.728,329.616,249.616,329.616z M312.456,322.016c20.272-17.608,33.16-43.504,33.16-72.4c0-28.88-12.872-54.752-33.12-72.368 c70.344,16.944,118.344,57.68,133.808,72.376C430.856,264.344,382.928,305.096,312.456,322.016z M449.616,281.616 c-4.336,0-8.576-1.008-12.536-2.752c16.216-12.8,25.368-22.672,26.456-23.864l4.896-5.384l-4.896-5.384 c-1.088-1.192-10.24-11.064-26.456-23.864c3.96-1.744,8.2-2.752,12.536-2.752c17.648,0,32,14.352,32,32 S467.264,281.616,449.616,281.616z" />
							<path d="M249.616,193.616c-30.88,0-56,25.128-56,56s25.12,56,56,56c11.048,0,21.744-3.224,30.936-9.336l-8.848-13.328 c-6.568,4.36-14.2,6.664-22.088,6.664c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40 c0,6.984-1.864,13.896-5.392,19.992l13.84,8.016c4.944-8.528,7.552-18.208,7.552-28.008 C305.616,218.744,280.496,193.616,249.616,193.616z" />
						</g>
					</svg>
					<h3 className="text-4xl my-3.5 font-bold text-secondary">Our Vision</h3>
					<p className="text-lg font-light text-secondary sm:text-left text-center">To take the nation's hospitality infrastructure sector to the international level with brilliancy, excellency and cutting-edge technology.</p>
				</div>
				<div className="font-Inter flex flex-col sm:items-start items-center">
					<svg viewBox="0 0 150 150" className="w-[120px]" fill="none" >
						<path d="M67.2222 137C101.587 137 129.444 109.466 129.444 75.5C129.444 41.5345 101.587 14 67.2222 14C32.8578 14 5 41.5345 5 75.5C5 109.466 32.8578 137 67.2222 137Z" stroke="currentColor" strokeWidth={6} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
						<path d="M67.2223 116.5C90.1319 116.5 108.704 98.1437 108.704 75.5C108.704 52.8563 90.1319 34.5 67.2223 34.5C44.3127 34.5 25.7408 52.8563 25.7408 75.5C25.7408 98.1437 44.3127 116.5 67.2223 116.5Z" stroke="currentColor" strokeWidth={6} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
						<path d="M67.2223 96.0005C78.6771 96.0005 87.963 86.8223 87.963 75.5005C87.963 64.1786 78.6771 55.0005 67.2223 55.0005C55.7675 55.0005 46.4815 64.1786 46.4815 75.5005C46.4815 86.8223 55.7675 96.0005 67.2223 96.0005Z" stroke="currentColor" strokeWidth={6} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
						<path d="M67.7478 75.5H118.514" stroke="currentColor" strokeWidth={6} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
						<path d="M145 85.7498H124.259L119.074 75.4998L124.259 65.2498H145L139.815 75.4998L145 85.7498Z" stroke="currentColor" strokeWidth={6} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<h3 className="text-4xl my-3.5 font-bold text-secondary">Our Mission</h3>
					<p className="text-lg font-light text-secondary sm:text-start text-center">To be the nation's leading PMC with constant improvement and consistency. We value quality over quantity.</p>
				</div>
			</section>

            {/* Our Team */}
            <section className="w-full h-full xl:px-20 lg:px-14 md:px-12 sm:px-10 px-8 my-16 mb-20">
                <h1 className="xl:text-7xl md:text-6xl text-5xl text-center font-bold drop-shadow-lg text-secondary font-Inter mb-3">
					Our Team
				</h1>
                <p className="md:mb-11 mb-8 font-light sm:text-xl text-lg text-center w-full mx-auto max-w-[600px]">We are a client-focused PMC team, delivering innovative and tailored solutions with expertise and integrity.</p>
                <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
                    { ourTeam.map((member, i) => (
                        <div key={i} className="relative w-auto h-auto font-Inter group/team rounded-lg overflow-hidden">
                            <img src={member.img} className="w-full h-full object-cover object-center" alt="" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex flex-col items-center justify-end px-4 py-4 transition-all duration-300 opacity-0 group-hover/team:opacity-100">
                                <h3 className="text-lightBlue xl:text-xl xl:leading-normal text-lg sm:leading-tight mb-0.5 font-semibold text-center">{member.name}</h3>
                                <p className="text-lightBlue font-light text-center">{member.designation}</p>
                            </div>
                        </div>
                    )) }
                </div>
            </section>
		</>
	);
};

export default AboutUs;
