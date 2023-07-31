import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

	return (
        <nav className="fixed top-0 left-0 flex items-center justify-between xl:px-20 w-full h-24 bg-primary font-Inter z-40">
            <Link className="h-full py-3.5" to='/'>
                <img src="/images/logo/logo.webp" alt="" className="w-full h-full" />
            </Link>
            <ul className="flex items-center justify-center gap-8 h-full">
                <Link className="h-full" to="/">
                    <li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">Home</li>
                </Link>
                <Link className="h-full" to="/about">
                    <li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">About Us</li>
                </Link>
                <Link className="h-full" to="/projects">
                    <li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">Projects</li>
                </Link>
                <Link className="h-full" to="/faqs">
                    <li className="relative h-full m-auto px-1 flex items-center justify-center transition-all duration-300 text-lg font-[300] text-white hover:before:w-full before:transition-all before:duration-300 before:absolute before:w-0 before:h-[4px] before:bg-primaryYellow before:left-0 before:right-0 before:m-auto before:bottom-0">FAQs</li>
                </Link>
                <Link className="md:flex hidden relative group/ctabtn" target="_black"
                onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                        navigate("/contact")
                    }, 200);
                }}>
					<button onClick={() => {
                        document.querySelector('#ctabtn').classList.add('animate-ctaBtn')
                        setTimeout(() => {
                            document.querySelector('#ctabtn').classList.remove('animate-ctaBtn')
                        }, 150);
                    }} id="ctabtn" className="bg-primaryYellow rounded z-10 w-full button-2 lg:p-3 p-2 lg:px-5 px-4 text-secondary font-medium relative group-hover/ctabtn:-skew-x-12 transition-all duration-300">
						Contact Us
					</button>
					<div className="absolute rounded group-hover/ctabtn:-skew-x-12 top-0 group-hover/ctabtn:top-1.5 left-0 group-hover/ctabtn:left-1.5 h-full w-full bg-secondary z-0 transition-all duration-300" />
				</Link>
            </ul>
        </nav>
    )
};

export default Header;
