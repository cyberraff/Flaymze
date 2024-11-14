const ServicesImgSchema = {
	name: 'servicesImg',
	title: 'Services Image',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		},
	],
};

export default ServicesImgSchema;
