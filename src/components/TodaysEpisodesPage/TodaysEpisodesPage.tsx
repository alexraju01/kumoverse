import { ClassName } from "@/types/props";
import { todaysEpisode } from "@/query/todaysEpisode";
import { Anime } from "@/types/anime";
import EpisodeList from "./EpisodeList";
import { fetchGraphQL } from "@/lib/fetchData";
import Schedule from "../Schedule";

export default async function TodaysEpisodesPage({ className }: ClassName) {
	const episodes: Anime[] = await fetchGraphQL(todaysEpisode); // Server fetch
	return (
		<div className={`w-full ${className}`}>
			<EpisodeList episodes={episodes} />
			<Schedule />
		</div>
	);
}
