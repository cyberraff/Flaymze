import ImageUrlBuilder from '@sanity/image-url';

import { createClient, groq, SanityClient } from 'next-sanity';

const config = {
	projectId: '009fs83d',
	dataset: 'production',
	apiVersion: '2024-10-03',
	useCdn: false,
};

export const client = createClient(config);

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
