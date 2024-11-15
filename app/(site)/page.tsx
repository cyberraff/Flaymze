// import {HeroPage} from "@/components/HeroPage";
import HeroPage from '../components/HeroPage';

export default function Home() {
	return (
		<div className='items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center '>
				<HeroPage />
			</main>
		</div>
	);
}
