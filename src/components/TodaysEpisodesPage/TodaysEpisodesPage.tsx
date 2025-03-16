// components/TodaysEpisodesPage.tsx
import { ClassName } from "@/types/props";
import { todaysEpisode } from "@/query/todaysEpisode";
import { Anime } from "@/types/anime";
// import EpisodeList from "./EpisodeList";
import Schedule from "../Schedule";
import EpisodeList from "./EpisodeList";
import fetchData from "@/lib/fetchData";

export default async function TodaysEpisodesPage({ className }: ClassName) {
	const episodes: Anime[] = await fetchData(todaysEpisode, true); // Server fetch
	return (
		<div className={`w-full ${className}`}>
			{/* <div className='flex flex-col md:flex-row justify-between mb-4'>
				<h1 className='text-2xl font-semibold text-gray-300 whitespace-nowrap text-[2rem]'>
					Recent Updates
				</h1>
			</div> */}

			{/* Episode List with Pagination */}
			<EpisodeList episodes={episodes} />

			{/* Schedule Component */}
			<Schedule />
		</div>
	);
}
