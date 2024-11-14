'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from './MobileMenu';

export const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/About' },
	{ name: 'Services', href: '/Services' },
	{ name: 'Work', href: '/Work' },
	{ name: 'Contact', href: '/Contact' },
];

		const Navbar = () => {
			const pathname = usePathname();
			return (
				<>

					<header className='sticky top-0 z-50 bg-background border-b mt-2'>
						<div className='flex flex-col-reverse md:flex-col px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto items-center justify-between  '>
							<Link href='/'>
								<h1 className=' font-medium my-8  md:text-4xl text-3xl tracking-widest '>
									Flaymze <span className=' font-extrabold '>Studios</span>
								</h1>
							</Link>
							<nav className='hidden gap-12 md:flex  '>
								{links.map((link, idx) => {
									return (
										<div key={idx}>
											{pathname === link.href ? (
												<Link
													href={link.href}
													className=' text-xl  font-semibold text-primary hover:text-foreground'>
													{link.name}
												</Link>
											) : (
												<Link
													href={link.href}
													className=' text-xl font-semibold text-foreground transition duration-100 hover:text-primary'>
													{link.name}
												</Link>
											)}
										</div>
									);
								})}
							</nav>
							<div className='flex md:hidden'>
								<MobileMenu />
							</div>
						</div>
					</header>
				</>
			);
};

export default Navbar;