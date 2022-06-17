import React from 'react';

// images
import Todo from '../assets/todo.jpg';
import Ecommerce from '../assets/ecommerce2.jpg';
import Country from '../assets/countries.jpg';
import Bookmark from '../assets/desktop-design.jpg';
import Devflix from '../assets/devflix.png';
import Food from '../assets/food.png';


export default function Work() {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] py-10">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Work</p>
					<p className="py-6">{'// Check out some of my recent work'}</p>
				</div>
				{/* grid container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg">
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Bookmark})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center object-cover mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100 ">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">A landing page using React js and tailwind css</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="https://rasheed-landing-page.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/bookmark-page">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Devflix})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100 ">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">A Netflix clone using React js, firebase and tailwind css</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="https://rasheed-devflix.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/Netflix-clone">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Food})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100 ">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">A food app using React js and firebase</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="https://rashtech-foods.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/food-recipe-app">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Todo})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100 ">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Todo app with vanilla js and SASS</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="https://todoapp-rasheed.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/todoapp">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Ecommerce})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Ecommerce website with vanilla js and SASS</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="http://ecommercesite-seven.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/ecommercesite">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Country})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Countries app using vanilla js and countries API</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="http://countriesapi-five.vercel.app">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="https://github.com/Damilola99-web/countriesapi">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
