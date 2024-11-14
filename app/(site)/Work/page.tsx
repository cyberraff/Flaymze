// import { GetStaticProps } from 'next';
import Link from 'next/link';
import { client, urlFor } from '@/sanity/config/sanity.utils';
import { VideoLink } from '@/types/videoLink'; // Define VideoLink interface
import Image from 'next/image';

// interface HomeProps {
// 	videoLinks: VideoLink[];
// }

async function getData() {
	const query = `*[_type == "videoLink"]{
    _id,
    title,
    "slug":slug.current,
    image,
    youtubeUrl
  }`;
	return await client.fetch(query);
}

export default async function Work() {
	const data: VideoLink[] = await getData();
	// console.log(data);

	return (
		<div className=' px-4 sm:px-6 max-w-5xl py-2 bg-background lg:max-w-7xl  mx-auto  text-center'>
			<h1 className='text-3xl font-medium pt-4 pb-4'>OUR WORKS</h1>
			<div className='grid gap-4grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
				{data.map((video) => (
					<Link
						className='relative w-full h-48 sm:h-56 md:h-64 bg-black rounded-lg overflow-hidden'
						href={`/video/${video.slug}`}
						key={video._id}>
						<Image
							src={urlFor(video.image).url()}
							alt={video.title}
							width={500}
							height={192}
							className='w-full h-full object-cover'
						/>
						<div className=' absolute inset-0 flex items-center justify-center'>
							<h2 className='text-white text-xl md:text-2xl font-bold text-center px-2'>
								{video.title}
							</h2>
						</div>
						{/* <h2>{video.title}</h2> */}
					</Link>
				))}
			</div>
		</div>
	);
}
