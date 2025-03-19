import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/fetchData";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
const ANILIST_API_URL = "https://graphql.anilist.co";

export default async function fetchData(
	endpointOrQuery: string | object,
	isGraphQL = false
): Promise<Anime[]> {
	const url = isGraphQL ? ANILIST_API_URL : `${BASE_API_URL}${endpointOrQuery}`;
	const payload =
		isGraphQL && typeof endpointOrQuery === "string" ? { query: endpointOrQuery } : endpointOrQuery;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch data from ${isGraphQL ? "AniList" : "API"}`);
		}

		const data: ApiResponse = await response.json();

		// Ensure correct data extraction
		if (isGraphQL && "data" in data) {
			return data.data.Page.media || []; // Extract media for GraphQL response
		}

		return Array.isArray(data) ? data : []; // Ensure REST API response is an array
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
}
