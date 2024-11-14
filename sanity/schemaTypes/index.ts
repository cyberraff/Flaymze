// import project from './project-schema';
import HeroCarouselSchema from "./HeroCarouselSchema";
import AboutImgSchema from "@/sanity/schemaTypes/AboutImgSchema";
import ServicesImgSchema from "@/sanity/schemaTypes/ServicesImgSchema";
import videoLinkSchema from "./VideoLinkSchema";

const schemaTypes = [
	HeroCarouselSchema,
	AboutImgSchema,
	ServicesImgSchema,
	videoLinkSchema,
];

export default schemaTypes;
