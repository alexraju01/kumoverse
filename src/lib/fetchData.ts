// d

import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/fetchData";

const ANILIST_API_URL = "https://graphql.anilist.co";

export default async function fetchEpisodes(query: string): Promise<Anime[]> {
	const response = await fetch(ANILIST_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data from AniList API");
	}

	const data: ApiResponse = await response.json();

	return data.data.Page.media;
}
