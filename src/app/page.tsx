import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";

import AsideRank from "@/components/AsideRank";
import Link from "next/link";

export default function Home() {
	return (
		<div className='container mx-auto '>
			<Link href='/anime-airing-today'>New episodes</Link>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<TodaysEpisodesPage className='   bg-[#0E0E0E] px-[10px]' />
				<AsideRank />
			</div>
		</div>
	);
}
