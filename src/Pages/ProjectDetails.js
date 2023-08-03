import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade } from "swiper/modules";

// import Project Data
import { projects } from "../Data";

const ProjectDetails = () => {

	const params = useParams();
    const [projectData, setProjectData] = useState({})

    useEffect(() => {
        let projName = params.projectName.replaceAll("-", " ")
        for(let i=0 ; i<projects.length ; i++) {
            if(projects[i].name === projName) {
                setProjectData(projects[i])
            }
        }
    }, [params.projectName]);

    document.title = projectData.name + ", " + projectData.location

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-8 w-screen h-full relative mt-24 lg:pt-14 sm:pt-12 pt-10 xl:px-20 lg:px-14 md:px-12 sm:px-10 px-5 ">

                {/* Project Name */}
                <h1 className="xl:text-7xl sm:text-5xl text-4xl text-center font-bold drop-shadow-lg text-secondary font-Inter sm:mb-0 -mb-3">{projectData.name}, <span className="font-light">{projectData.location}</span></h1>

                {/* Project Images */}
				<Swiper
                    slidesPerView={1.1}
					spaceBetween={30}
					effect={"fade"}
                    centeredSlides={true}
					modules={[EffectFade]}
					className="mySwiper w-full xl:h-[40rem] lg:h-[30rem] md:h-[25rem] sm:h-96 h-72 border md:rounded-xl rounded-lg"
				>
                    { projectData?.img?.map((imgSrc, i) => (
                        <SwiperSlide key={i} className="relative">
						    <img src={imgSrc} className="w-full h-full object-cover object-top" alt="" />
                            <div className="absolute top-0 right-0 w-fit h-fit bg-[rgba(0,0,0,0.8)] md:px-4 px-3 md:py-3 py-1.5 md:rounded-bl-xl rounded-bl">
                                <p className="text-white font-Inter md:text-base text-sm">{i+1} / {projectData?.img?.length}</p>
                            </div>
					    </SwiperSlide>    
                    )) }					
				</Swiper>

                {/* Project Description */}
                <ul className="flex flex-col items-start justify-center gap-3 px-3 pb-9 sm:mt-0 -mt-2 w-full">
                    { projectData?.desc?.map((description, i) => (
                        <li className="font-Inter text-justify md:text-left text-base lg:text-lg font-light" key={i}>{description}</li>
                    )) }
                </ul>
                
			</section>
		</>
	);
};

export default ProjectDetails;
