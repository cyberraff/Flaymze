// export interface VideoLink {
// 	_id: string;
// 	title: string;
// 	slug: {
// 		current: string;
// 	};
// 	image: { _type: string; asset: { _ref: string } };
// 	youtubeUrl: string;
// }


export interface VideoLink {
	_id: string;             // Sanity automatically adds an _id field
	title: string;
	slug: {
		current: string;       // Slug field has a "current" property in Sanity
	};
	image: {
		asset: {
			_ref: string;       // Reference to the image asset
		};
		hotspot?: boolean;    // Optional hotspot for cropping
	};
	youtubeUrl: string;
}