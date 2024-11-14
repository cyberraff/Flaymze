// import { Rule } from 'sanity';

const HeroCarouselSchema = {
	name: 'heroCarousel',
	title: 'Hero Carousel',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Carousel Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'image',
			title: 'Thumbnail Image',
			type: 'image',
			options: {
				hotspot: true, // Allows for better image cropping
			},
		},
		{
			name: 'youtubeUrl',
			title: 'YouTube Video URL',
			type: 'url',
		},

	],
};
export default HeroCarouselSchema;
