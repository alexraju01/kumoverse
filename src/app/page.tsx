import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";

export default function Home() {
	return (
		<div className='container mx-auto px-2'>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<TodaysEpisodesPage className='  bg-[#0E0E0E]' />
				<aside className='w-1/4 min-w-[320px] flex-shrink-0 px-[10px] bg-#0E0E0E space-y-2'>
					<div className='flex justify-between'>
						<h2>Top Anime</h2>
						<div className='flex gap-3'>
							<p>Today</p>
							<p>Week</p>
							<p>Month</p>
						</div>
					</div>
					<div className='aside-card'>
						<div className='h-[55px] w-[50px]'></div>
					</div>
					<div className='aside-card'></div>
					<div className='aside-card'></div>
					<div className='aside-card'></div>
				</aside>
			</div>
			<div>jshdgfjhksdg</div>
		</div>
	);
}
