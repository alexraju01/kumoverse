import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";

import AsideRank from "@/components/AsideRank";

export default function Home() {
	return (
		<div className='container mx-auto '>
			<div className='flex -mx-[10px] flex-col lg:flex-row'>
				<TodaysEpisodesPage className='   bg-[#0E0E0E] px-[10px]' />
				<AsideRank />
			</div>
		</div>
	);
}
