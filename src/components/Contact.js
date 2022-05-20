import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
	useEffect(()=>{Aos.init({duration: 1300})}, [])
	return (
		<div name="contact" className="w-full h-screen bg-[#0a192f] p-8 flex flex-col justify-center items-center ">
			<form
				action="https://getform.io/f/d13a333b-85fc-4e24-9b04-863d3cf6576e"
				method="POST"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="border-b-4 border-pink-600 text-4xl text-gray-300 font-bold inline">Contact</p>
					<p data-aos='fade-right' className="py-6 text-gray-300">
						// Submit the form below or send an email :{' '}
						<a className=" text-pink-600" href="mailto:rasheedw622@gmail.com">
							Abdul-Rasheed
						</a>
					</p>
				</div>
				<input data-aos='fade-left' className=" rounded-sm  bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
				<input data-aos='fade-right' className=" rounded-sm my-4 bg-[#ccd6f6] p-2" type="email" placeholder="Email" name="email" />
				<textarea data-aos='fade-up'
					className=" rounded-sm bg-[#ccd6f6] p-2"
					name="message"
					placeholder="Message here..."
					rows="10"
				/>
				<button data-aos='fade-up' className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 duration-500 mx-auto flex items-center">
					Let's Collaborate
				</button>
			</form>
			<div data-aos='fade-right' className="icons flex mt-4">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/abdul-rasheed-wahab-92aa15214?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BySmMMSvmQ1O05lZ%2FYus9Qw%3D%3D"
					className=" ml-4 flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-blue-600 p-3"
				>
					<FaLinkedin size={20} />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.github.com/damilola99-web"
					className="flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-[#333] p-3 ml-4 "
				>
					<FaGithub size={20} />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:rasheedw622@gmail.com"
					className="flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-red-500 p-3 ml-4 "
				>
					<HiOutlineMail size={20} />
				</a>
			</div>
		</div>
	);
};

export default Contact;
