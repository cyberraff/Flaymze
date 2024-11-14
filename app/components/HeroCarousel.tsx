// import { useState, useEffect } from 'react';
// import { urlFor } from '../lib/sanityClient';
//
// const HeroCarousel = ({ data }) => {
// 	const [currentSlide, setCurrentSlide] = useState(0);
//
// 	// Automatically switch slides at specified interval
// 	useEffect(() => {
// 		const slideInterval = setInterval(() => {
// 			setCurrentSlide((prev) => (prev === data.slides.length - 1 ? 0 : prev + 1));
// 		}, data.interval * 1000); // Convert to milliseconds
//
// 		return () => clearInterval(slideInterval);
// 	}, [data.slides.length, data.interval]);
//
// 	return (
// 		<div className="relative w-full h-[500px] overflow-hidden">
// 			{data.slides.map((slide, index) => (
// 				<div
// 					key={index}
// 					className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
// 				>
// 					<img
// 						src={urlFor(slide.image).url()}
// 						alt={slide.altText}
// 						className="w-full h-full object-cover"
// 					/>
// 					{slide.caption && (
// 						<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
// 							<p>{slide.caption}</p>
// 							{slide.link && (
// 								<a href={slide.link} className="text-blue-400 underline">
// 									Learn More
// 								</a>
// 							)}
// 						</div>
// 					)}
// 				</div>
// 			))}
// 		</div>
// 	);
// };
//
// export default HeroCarousel;
//
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { urlFor } from '@/sanity/config/sanity.utils';
//
// interface HeroCarouselProps {
// 	data: HeroCarouselType;
// }
//
// const HeroCarousel: React.FC<HeroCarouselProps> = ({ data }) => {
// 	const [currentSlide, setCurrentSlide] = useState<number>(0);
//
// 	useEffect(() => {
// 		const slideInterval = setInterval(() => {
// 			setCurrentSlide((prev) => (prev === data.slides.length - 1 ? 0 : prev + 1));
// 		}, data.interval * 1000); // Convert seconds to milliseconds
//
// 		return () => clearInterval(slideInterval);
// 	}, [data.slides.length, data.interval]);
//
// 	return (
// 		<div className="relative w-full h-[500px] overflow-hidden">
// 			{data.slides.map((slide, index) => (
// 				<div
// 					key={index}
// 					className={`absolute inset-0 transition-opacity duration-1000 ${
// 						index === currentSlide ? 'opacity-100' : 'opacity-0'
// 					}`}
// 				>
// 					<img
// 						src={urlFor(slide.image).url()}
// 						alt={slide.altText}
// 						className="w-full h-full object-cover"
// 					/>
// 					<p>hello world</p>
// 					{slide.caption && (
// 						<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
// 							<p>{slide.caption}</p>
// 							{slide.link && (
// 								<a href={slide.link} className="text-blue-400 underline">
// 									Learn More
// 								</a>
// 							)}
// 						</div>
// 					)}
// 				</div>
// 			))}
// 		</div>
// 	);
// };
//
// export default HeroCarousel;
'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import { HeroCarousel as HeroCarouselType } from '@/types/heroCarousel';
import { urlFor } from '@/sanity/config/sanity.utils';

import Image from 'next/image';
// import {
// 	NextButton,
// 	PrevButton,
// 	usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'

// type PropType = {
// 	slides: number[],
// 	options?: EmblaOptionsType,
// 	data?: any
// }
interface HeroCarouselProps {
	slides: number[];
	options?: EmblaOptionsType;
	data: HeroCarouselType[];
}

const EmblaCarousel: React.FC<HeroCarouselProps> = (props) => {
	const { options, data } = props;
	const [emblaRef] = useEmblaCarousel(options, [
		Fade(),
		Autoplay({ playOnInit: true, delay: 6000 }),
	]);
	// console.log(data)
	// const { selectedIndex, scrollSnaps, onDotButtonClick } =
	// 	useDotButton(emblaApi)
	//
	// const {
	// 	prevBtnDisabled,
	// 	nextBtnDisabled,
	// 	onPrevButtonClick,
	// 	onNextButtonClick
	// } = usePrevNextButtons(emblaApi)

	return (
		<div className='embla'>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{data.map((data, index) => (
						<div className='embla__slide' key={index}>
							{/*<img*/}
							{/*	className="embla__slide__img"*/}
							{/*	src={`https://picsum.photos/600/350?v=${index}`}*/}
							{/*	alt="Your alt text"*/}
							{/*/>*/}
							<Image
								src={urlFor(data.image).url()}
								alt='Great Image'
								width={450}
								height={450}
								priority
								className='embla__slide__img '
								// className='  rounded-sm rounded-tr-[5rem] rounded-bl-[5rem] md:mt-8 '
							/>
							<div className='pt-4 sm:text-lg lg:text-2xl text-end '>
								<p className=''>{data.title}</p>
								{/* <p className=''>{data.caption}</p> */}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
		</div>
	);
};

export default EmblaCarousel;
