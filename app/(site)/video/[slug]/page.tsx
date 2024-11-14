import { client } from '@/sanity/config/sanity.utils';
// import { VideoLink } from '@/types/videoLink';

// interface VideoPageProps {
// 	video: VideoLink;
// }
type Props = {
	params: { slug: string };
};

async function getData(slug: string) {
	const query = `*[_type == "videoLink" && slug.current == $slug][0]{
    title,
	"slug":slug.current,
    youtubeUrl
  }`;
	return await client.fetch(query, { slug });
}

export default async function VideoPage({ params }: Props) {
	const data = await getData(params.slug);
	console.log(data);

	return (
		<div>
			<h1 className=' text-2xl font-semibold text-center py-8 md:py-16'>
				{data.title}
			</h1>
			<div className='video-wrapper'>
				<iframe
					className=' h-[36rem] md:h-[48rem] md:w-[80rem] mx-auto'
					src={data.youtubeUrl}
					width='100%'
					height='100%'
					allowFullScreen
				/>
			</div>
		</div>
	);
}
