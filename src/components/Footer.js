import React from 'react';

const Footer = () => {
	const date = new Date()
	return (
		<div className="flex items-center justify-center py-4 bg-[#081420] text-white">
			<p>
				{' '}
				&copy; copyright  {date.getFullYear()}  <span className="text-pink-600"> Abdul-Rasheed</span>
			</p>
		</div>
	);
};

export default Footer;
