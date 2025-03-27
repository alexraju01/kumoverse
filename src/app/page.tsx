import { AsideRank, TodaysEpisodesPage } from "@/components";

import Link from "next/link";

export default async function Home() {
	return (
		<div className='container mx-auto '>
			<Link href='/anime-airing-today'>New episodes</Link>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<TodaysEpisodesPage className='bg-[#0E0E0E] px-[10px]' />
				<AsideRank />
			</div>
		</div>
	);
}
