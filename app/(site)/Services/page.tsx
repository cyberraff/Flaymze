import {client, urlFor} from "@/sanity/config/sanity.utils";
import React from "react";
import Image from "next/image";

async function getData() {
	const query = `*[_type == "aboutImg"][0]`;
	return await client.fetch(query);
}


export default async function Services() {
	const data = await getData();

	return (
		<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto  text-center'>
			<h1 className='text-3xl font-medium pt-4 pb-4'>ABOUT US</h1>
			<Image
				src={urlFor(data.image).url()}
				alt='Great Image'
				width={450}
				height={450}
				priority
				// className="embla__slide__img "
				className=' w-full md:mt-8'
			/>
			<div className=' px-8 md:px-16 lg:px-36'>
				<p className='pt-8 px-4 text-xl leading-relaxed '>
					At FLAYMZE STUDIO, we provide expert service production for shoots in Nigeria,
					captivating African locations, Canada, and select European countries. Our capabilities span
					corporate events, music videos, documentaries, weddings, commercials, photo shoots, and
					more.
				</p>
				<p className='text-lg'>
					The African narrative is changing, and our continent's unique textures, colors, people, and
					untapped locations are now an envy globally. Our seasoned team, comprising skilled camera
					crews, producers, location managers, and production designers, ensures top-notch
					production that meets international standards.

				</p>
				<p>
					Check out our portfolio and get inspired! Let's collaborate to bring your vision to life. Contact
					us today for tailored service production solutions.
				</p>
			</div>
		</div>
	)
}