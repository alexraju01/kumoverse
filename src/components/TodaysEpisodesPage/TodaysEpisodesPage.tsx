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
	
			{/* Episode List with Pagination */}
			<EpisodeList episodes={episodes} />
			<Schedule />
		</div>
	);
}
