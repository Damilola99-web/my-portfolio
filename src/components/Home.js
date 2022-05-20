import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'react-scroll/modules/components/Link';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
	useEffect(()=>{Aos.init({duration: 1300})}, [])
	return (
		<div name="home" className="bg-[#0a192f] h-screen w-full">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full lg:px-[70px]">
				<p className=" text-pink-600 text-xl" data-aos = 'fade-down'>Hi, my name is</p>
				<h1 className="text-4xl sm:text-6xl text-[#ccd6f6] font-bold" data-aos='fade-right'>Wahab Abdul-Rasheed</h1>
				<h2 className="text-3xl sm:text-5xl text-[#8892b0] font-bold" data-aos = 'fade-left'>I'm a Front-End Developer</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]" data-aos = 'fade-right'>
					I'm a Front-End Developer specializing in building exceptional digital experiences. Currently, I'm
					focused on building responsive and dynamic web application
				</p>
				<div>
					<Link to="work" smooth={true} duration={500}>
						<button data-aos ='fade-up' className="text-white group border-2 px-6 py-3 flex items-center my-2 hover:bg-pink-600 duration-300">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className=" ml-3" />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
