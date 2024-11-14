
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemaTypes from './sanity/schemaTypes';

const config = defineConfig({
	name: 'default',
	title: 'Flaymze-Media',
	projectId: '009fs83d',
	dataset: 'production',
	apiVersion: '2024-10-03',
	basePath: '/admin',

	plugins: [structureTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
});

export default config;
