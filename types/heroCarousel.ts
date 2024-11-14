export interface Slide {
	image: {
		asset: {
			_ref: string;            // Reference to the image asset
		};
		hotspot?: boolean;         // Optional hotspot for cropping
	};
	// image: any; // Sanity uses a custom type for image, so 'any' works here. You could refine this with specific fields from the image object if needed.
	altText: string;
	caption?: string;
	link?: string;
}

// export interface HeroCarousel {
// 	title: string;
// 	slides: Slide[];
// 	interval: number;
// }

export interface HeroCarousel {
	_id: string;                 // Unique ID for the document
	title: string;
	slug: {
		current: string;           // Slug value
	};
	image: {
		asset: {
			_ref: string;            // Reference to the image asset
		};
		hotspot?: boolean;         // Optional hotspot for cropping
	};
	youtubeUrl: string;
};