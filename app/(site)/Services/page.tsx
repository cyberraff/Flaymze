import { client, urlFor } from '@/sanity/config/sanity.utils';
import React from 'react';
import Image from 'next/image';

async function getData() {
	const query = `*[_type == "servicesImg"][0]`;
	return await client.fetch(query);
}

export default async function Services() {
	const data = await getData();

	return (
		<>
			<h1 className='text-3xl font-medium pt-8 pb-4 text-center'>
				OUR SERVICES
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
			<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto  text-center'>
				<div className=' px-8 md:px-16 lg:px-36'>
					<p className='pt-8 px-4 text-xl leading-relaxed '>
						At FLAYMZE STUDIO, we provide expert service production
						for shoots in Nigeria, captivating African locations,
						Canada, and select European countries. Our capabilities
						span corporate events, music videos, documentaries,
						weddings, commercials, photo shoots, and more.
					</p>
					<p className='text-lg'>
						The African narrative is changing, and our
						continent&apos;s unique textures, colors, people, and
						untapped locations are now an envy globally. Our
						seasoned team, comprising skilled camera crews,
						producers, location managers, and production designers,
						ensures top-notch production that meets international
						standards.
					</p>
					<p>
						Check out our portfolio and get inspired! Let&apos;s
						collaborate to bring your vision to life. Contact us
						today for tailored service production solutions.
					</p>
				</div>
			</div>
		</>
	);
}
