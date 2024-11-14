import { client } from '@/sanity/config/sanity.utils';
import EmblaCarousel from './HeroCarousel';
// import HeroCarousel from '../components/HeroCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { HeroCarousel as HeroCarouselType } from '@/types/heroCarousel';

import '../embla.css';
// import {HeroCarousel as HeroCarouselType} from '@/types/heroCarousel';

// interface HomeProps {
// 	carouselData: HeroCarouselType;
// }
// export const dynamic = 'force-dynamic';
const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

async function getData(): Promise<HeroCarouselType[]> {
	const query = `*[_type == "heroCarousel"]{
    title,
    youtubeUrl,
    slug,
    image,
  }`;
	return await client.fetch(query);
}

const HeroPage = async () => {
	const data: HeroCarouselType[] = await getData();
	// console.log(data);
	return (
		<div>
			{/*<HeroCarousel data={data}/>*/}
			<EmblaCarousel slides={SLIDES} options={OPTIONS} data={data} />
		</div>
	);
};

export default HeroPage;
