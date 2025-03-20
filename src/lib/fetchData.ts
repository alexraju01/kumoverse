import { Anime } from "@/types/anime";
import { ApiResponse, GraphQLResponse } from "@/types/fetchData";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
const ANILIST_API_URL = "https://graphql.anilist.co";

export async function fetchGraphQL(query: string): Promise<Anime[]> {
	try {
		const response = await fetch(ANILIST_API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query }),
			// Use fetch options specific to Next.js App Router
			cache: "no-store", // or "force-cache" / "revalidate" as per needs
		});

		if (!response.ok) {
			throw new Error("Failed to fetch data from AniList");
		}

		const data: GraphQLResponse = await response.json();
		return data.data?.Page?.media || [];
	} catch (error) {
		console.error("GraphQL Fetch error:", error);
		throw error;
	}
}

export async function fetchData<T = unknown>(
	endpoint: string,
	method: "GET" | "POST" = "GET",
	body?: T
): Promise<Anime[]> {
	try {
		const url = `${BASE_API_URL}${endpoint}`;
		const options: RequestInit = {
			method,
			headers: { "Content-Type": "application/json" },
			cache: "no-store",
			...(method === "POST" && body ? { body: JSON.stringify(body) } : {}),
		};

		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error("Failed to fetch data from API");
		}

		const data: ApiResponse = await response.json();
		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error("REST API Fetch error:", error);
		throw error;
	}
}
