// const url = "https://api.jikan.moe";

import { todaysEpisode } from "@/query/todaysEpisode";
import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/fetchData";

// export default async function fetchData(version: string, endpoint: string) {
// 	const response = await fetch(`${url}/${version}/${endpoint}`, {
// 		next: { revalidate: 3600 }, // Correct placement of the `next` option
// 	});

// 	console.log(`Fetching: ${url}/${version}/${endpoint}`);

// 	if (!response.ok) {
// 		throw new Error(
// 			`Failed to fetch data: ${response.status} ${response.statusText}`
// 		);
// 	}

// 	const data = await response.json();
// 	return data;
// }

const ANILIST_API_URL = "https://graphql.anilist.co";

export default async function fetchEpisodes(): Promise<Anime[]> {
	const response = await fetch(ANILIST_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query: todaysEpisode }),
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data from AniList API");
	}

	const data: ApiResponse = await response.json();

	return data.data.Page.media;
}
