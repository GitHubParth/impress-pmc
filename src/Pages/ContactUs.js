import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
	return (
		<section className="mt-24 lg:pt-16 md:pt-12 pt-6 flex flex-col bg-EEE items-center justify-center gap-16 h-full w-full">

            {/* Contact Us */}
			<div className="flex md:flex-row flex-col items-start justify-center lg:gap-0 md:gap-10 gap-8 w-full h-full xl:px-20 lg:px-16 sm:px-10 px-6">

                {/* Say Hello */}
                <div className="lg:w-1/2 md:w-1/3 h-full flex flex-col items-start justify-start">
                    <div className="font-Poppins">
                        <h2 className="md:text-[4.5vw] sm:text-[6vw] text-[3rem] font-bold">Say</h2>
                        <h1 className="text-border-black text-transparent md:mt-[-4.6vw] md:text-[8.5vw] sm:text-[13vw] text-[5rem] sm:mt-[-7vw] mt-[-2.7rem] uppercase font-bold">Hello!</h1>
                    </div>
                    <p className="text-sm uppercase tracking-[0.5em] font-Poppins text-primaryGreen font-medium md:mb-10 mb-3 md:ml-0 ml-2">Get In Touch</p>
                    <div className="flex items-start lg:flex-row flex-col lg:gap-5 gap-1 md:ml-0 ml-2 mb-4">
                        <div className="flex items-center justify-center md:gap-4 gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <span className="font-Inter">Email</span>
                        </div>
                        <div className="flex flex-col">
                            <Link to="mailto:info@impresspmc.com" className="font-light hover:translate-x-1 transition-all duration-200">Info@impresspmc.com</Link>
                            <Link to="mailto:shrinath@impresspmc.com" className="font-light hover:translate-x-1 transition-all duration-200 break-words">Shrinath@impresspmc.com</Link>
                        </div>
                    </div>
                    <div className="flex items-start lg:flex-row flex-col lg:gap-5 gap-1 md:ml-0 ml-2">
                        <div className="flex items-center justify-center md:gap-4 gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                            <span className="font-Inter">Call</span>
                        </div>
                        <div className="flex flex-col">
                            <Link to="tel:9004096297" className="font-light hover:translate-x-1 transition-all duration-200">+91 90040 96297</Link>
                            <Link to="tel:8879564734" className="font-light hover:translate-x-1 transition-all duration-200">+91 88795 64734</Link>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="lg:w-1/2 w-full h-full md:p-10 px-6 py-8 bg-black">
                    <form className="font-Inter">
                        <h2 className="md:text-2xl text-xl font-semibold md:mb-7 mb-5 md:ml-1 text-white">For any inqueries</h2>
                        <div className="relative w-full h-12 mb-5">
                            <input type="text" id="name" name="name" placeholder=" " className="pt-2 bg-transparent text-gray-300 peer/name border-b border-[#2f2f2f] outline-none w-full h-full" />
                            <label htmlFor="name" className="absolute text-gray-300 font-extralight peer-placeholder-shown/name:top-3 peer-placeholder-shown/name:left-0 peer-placeholder-shown/name:text-lg peer-focus/name:text-xs peer-focus/name:left-0 left-0 -top-0.5 text-xs peer-focus/name:-top-0.5 transition-all duration-300">Name</label>
                        </div>
                        <div className="relative w-full h-12 mb-5">
                            <input type="text" id="email" name="email" placeholder=" " className="pt-2 bg-transparent text-gray-300 peer/email border-b border-[#2f2f2f] outline-none w-full h-full" />
                            <label htmlFor="email" className="absolute text-gray-300 font-extralight peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:left-0 peer-placeholder-shown/email:text-lg peer-focus/email:text-xs peer-focus/email:left-0 left-0 -top-0.5 text-xs peer-focus/email:-top-0.5 transition-all duration-300">Email</label>
                        </div>
                        <div className="relative w-full h-12 mb-5">
                            <input type="text" id="contact" name="contact" placeholder=" " className="pt-2 bg-transparent text-gray-300 peer/contact border-b border-[#2f2f2f] outline-none w-full h-full" />
                            <label htmlFor="contact" className="absolute text-gray-300 font-extralight peer-placeholder-shown/contact:top-3 peer-placeholder-shown/contact:left-0 peer-placeholder-shown/contact:text-lg peer-focus/contact:text-xs peer-focus/contact:left-0 left-0 -top-0.5 text-xs peer-focus/contact:-top-0.5 transition-all duration-300">Contact</label>
                        </div>
                        <div className="relative w-full h-auto md:mb-6 mb-5">
                            <textarea rows={3} cols={10} id="msg" placeholder=" " className="pt-4 bg-transparent text-gray-300 peer/msg border-b border-[#2f2f2f] outline-none w-full h-full" />
                            <label htmlFor="msg" className="absolute text-gray-300 font-extralight peer-placeholder-shown/msg:top-3 peer-placeholder-shown/msg:left-0 peer-placeholder-shown/msg:text-lg peer-focus/msg:text-xs peer-focus/msg:left-0 left-0 -top-0.5 text-xs peer-focus/msg:-top-0.5 transition-all duration-300">Message</label>
                        </div>
                        <button type="submit" className="relative bg-primaryYellow rounded-full md:px-8 px-6 py-2 md:py-3 hover:animate-btn-pulse-yellow">
                            Submit
                            <div className="bg-primaryYellow rounded-full w-full h-full -z-10 absolute top-0 left-0 hover:animate-ping" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Map */}
			<div className="w-full xl:px-20">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.367979237466!2d72.86128!3d19.1802594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7066f17bce7%3A0x735e2868daac688f!2sImpressPMC!5e0!3m2!1sen!2sin!4v1688806649443!5m2!1sen!2sin"
					width="100%"
					height="400"
					loading="lazy"
                    title="Impress PMC Location"
				/>
			</div>
		</section>
	);
};

export default ContactUs;
