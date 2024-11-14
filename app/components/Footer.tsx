'use client';
import React from 'react';
// import { usePathname } from 'next/navigation';
import { Instagram, Twitter } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';

// import { links } from './Navbar';
import Link from 'next/link';

const socials = [
	{ icon: <Instagram size={28} />, href: '/' },
	{ icon: <Twitter size={28} />, href: '/Services' },
	{ icon: <FaTiktok size={28} />, href: '/Contact' },
	{
		icon: <FaWhatsapp size={28} />,
		href: '#',
	},
];

export default function Footer() {
	return (
		<footer className=''>
			{/**/}
			<div className=' py-16 lg:py-28 bg-background '>
				<div className='px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto text-[#2d2d2d] text-sm'>
					<p className=' text-xl font-bold text-primary mx-auto w-fit'>
						Contact Us
					</p>
					<div className='flex mx-auto w-fit my-4'>
						{/* button with link to containing social media icons  */}
						{socials.map((social, idx) => {
							return (
								<Link
									key={idx}
									href={social.href}
									target='_blank'
									className=' text-lg font-semibold transition duration-100 hover:text-primary mx-2'>
									{social.icon}
								</Link>
							);
						})}
					</div>
					<p className='w-fit mx-auto'>
						©️ 2024 All Rights Reserved. By HTML Design
					</p>
				</div>
			</div>
		</footer>
	);
}
