import { client, urlFor } from '@/sanity/config/sanity.utils';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { Mail, Phone } from 'lucide-react';

async function getData() {
	const query = `*[_type == "aboutImg"][0]`;
	return await client.fetch(query);
}

export default async function About() {
	const data = await getData();
	// const pathname = usePathname();
	const phoneNumber = '+(234) 913 416 6372';
	const emailAddress = 'email';
	// console.log(data)
	return (
		<>
			<h1 className='text-3xl font-medium pt-8 pb-4 text-center'>
				ABOUT US
			</h1>
			{/* <div className=' relative w-[85%] mx-auto overflow-hidden pb-[46.25%]'> */}
			<Image
				src={urlFor(data.image).url()}
				alt='Great Image'
				width={450}
				height={450}
				priority
				// className=' absolute top-0 left-0 w-full h-full object-cover '
				className='w-full h-[30rem] sm:w-[95%] sm:h-[35rem] md:w-[90%] md:h-[40rem] lg:w-[85%] lg:h-[45rem] xl:h-[50rem] 2xl:h-[55rem] mx-auto md:mt-8  object-cover  p-8'
			/>
			{/* </div> */}

			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto  text-center'>
				<p className='text-xl pt-4'>
					Flaymze Creative Studios is a media and production services
					company specialised in events media coverage, creative
					visuals and commercials, movies and television. <br />
					With an exceptionally skilled team and a reputation for
					delivering quality work for our broad client base time after
					time.
				</p>
				<div>
					<div className=' py-16 lg:py-28 '>
						<div className='px-4 sm:px-6 max-w-5xl py-2 lg:max-w-7xl  mx-auto md:flex  text-lg'>
							<div className='flex-1'>
								{' '}
								<p className=' text-2xl font-medium'>TEAM</p>
								<p className='md:w-[90%] my-4 pl-4'>
									<span className='font-bold'>
										King Peter Obi
									</span>{' '}
									- position
								</p>
								<p className='md:w-[90%] my-4 pl-4'>
									<span className='font-bold'>Jerry</span> -
									position
								</p>
								<p className='md:w-[90%] my-4 pl-4'>
									<span className='font-bold'>Kelvin</span> -
									position
								</p>
								<p className='md:w-[90%] my-4 pl-4'>
									<span className='font-bold'>Chief</span> -
									position
								</p>
							</div>
							<div className='flex-1 justify-center mt-8 md:mt-0 '>
								{' '}
								<p className=' text-2xl font-medium '>
									SPEAK WITH US
								</p>
								<div className='mx-auto w-fit pt-4'>
									<Link
										href={`tel:${phoneNumber}`}
										className=' mx-auto w-fit'>
										<p className='flex hover:text-primary mx-auto w-fit py-2'>
											<Phone
												size={20}
												className='mr-2 mt-1'
											/>{' '}
											{phoneNumber}
										</p>
									</Link>
									<Link
										href={`mailto:${emailAddress}`}
										className=' mx-auto w-fit'>
										<p className='flex hover:text-primary mx-auto w-fit py-2'>
											<Mail
												size={20}
												className='mr-2 mt-1'
											/>{' '}
											{emailAddress}
										</p>
									</Link>
								</div>
							</div>
							<div className='flex-1 justify-center mt-8 md:mt-0 '>
								{' '}
								<p className=' text-2xl font-medium'>
									<span className='inline-block w-3 h-3 bg-primary rounded-full mr-1'></span>
									SOCIAL
								</p>
								<div className='mx-auto w-fit mt-4'>
									<Link
										href='https://www.instagram.com/flaymzephotos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
										target='_blank'
										className='mx-auto w-fit'>
										<p className='flex hover:text-primary mx-auto w-fit font-bold text-lg '>
											{/*<Phone size={20} className='mr-2 mt-1'/>{' '}*/}
											Flaymze Photos
										</p>
									</Link>
									<br />
									<Link
										href='https://www.instagram.com/flaymzeentertainment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
										target='_blank'
										className='mx-auto w-fit'>
										<p className='flex hover:text-primary mx-auto w-fit font-bold text-lg '>
											{/*<Phone size={20} className='mr-2 mt-1'/>{' '}*/}
											Flaymze Entertainment
										</p>
									</Link>
									<br />
									<Link
										href='https://www.instagram.com/flaymzeweddings?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
										target='_blank'
										className='mx-auto w-fit'>
										<p className='flex hover:text-primary mx-auto w-fit font-bold text-lg '>
											{/*<Phone size={20} className='mr-2 mt-1'/>{' '}*/}
											Flaymze Weddings
										</p>
									</Link>
									<br />
									{/*<Link*/}
									{/*	href='https://wa.me/message/OZYFXEP5GXRHF1'*/}
									{/*	target='_blank'>*/}
									{/*	<p className='flex hover:text-primary'>*/}
									{/*		<FaWhatsapp*/}
									{/*			size={20}*/}
									{/*			className='mr-2 mt-1'*/}
									{/*		/>{' '}*/}
									{/*		{phoneNumber}*/}
									{/*	</p>*/}
									{/*</Link>*/}
									{/*<br/>*/}
									{/*<Link href={`mailto:${emailAddress}`}>*/}
									{/*	<p className='flex hover:text-primary'>*/}
									{/*		<Mail size={20} className='mr-2 mt-1'/>{' '}*/}
									{/*		{emailAddress}*/}
									{/*	</p>*/}
									{/*</Link>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
