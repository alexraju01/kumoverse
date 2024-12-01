// import RecentEpisode from "@/components/FetchTodayAnime/FetchTodayAnime";
// import TodayAnimePage from "@/components/TodayAnimePage/TodayAnimePage";
import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";
import UpComingAnime from "@/components/UpComingAnime/UpComingAnime";

export default function Home() {
	return (
		<div>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<UpComingAnime className='flex-grow  w-[1px] px-[10px] bg-[#0E0E0E]' />
				<aside className='w-1/4 min-w-[320px] flex-shrink-0 px-[10px] bg-#0E0E0E space-y-2'>
					<div className='aside-card'></div>
					<div className='aside-card'></div>
					<div className='aside-card'></div>
					<div className='aside-card'></div>
				</aside>
			</div>
			<div>jshdgfjhksdg</div>
			<TodaysEpisodesPage />
			{/* <UpComingAnime data='Recent' /> */}
		</div>
	);
}
