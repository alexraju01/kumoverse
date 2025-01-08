import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";

import AsideRank from "@/components/AsideRank";

export default function Home() {
	return (
		<div className='container mx-auto '>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<TodaysEpisodesPage className=' px-[10px]  bg-[#0E0E0E]' />
				<AsideRank />
			</div>
			<div>jshdgfjhksdg</div>
		</div>
	);
}
