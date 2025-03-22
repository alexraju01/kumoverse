import { query } from "@/query/ScheduledAnime";

export interface AiringSchedule {
	// id: number;
	airingAt: number;
	media: {
		id: number;
		coverImage: {
			large: string;
		};
		title: {
			romaji: string;
			english: string | null;
		};
		episodes: number | null;
		format: string;
		siteUrl: string;
	};
}

interface AnilistResponse {
	data: {
		Page: {
			airingSchedules: AiringSchedule[];
		};
	};
}

export async function getTodaysAiringAnime(): Promise<AiringSchedule[]> {
	const now = new Date();
	const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;
	const endOfDay = startOfDay + 86400;

	try {
		const res = await fetch("https://graphql.anilist.co", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				query,
				variables: {
					page: 1,
					start: Math.floor(startOfDay),
					end: Math.floor(endOfDay),
				},
			}),
			// Enable Next.js fetch caching for static pages or revalidation
			// Use { cache: "no-store" } if data must always be fresh
			next: {
				revalidate: 3600, // revalidate every 1 hour
			},
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch: ${res.status}`);
		}

		const json: AnilistResponse = await res.json();
		return json?.data?.Page?.airingSchedules ?? [];
	} catch (error) {
		console.error("Error fetching today's airing anime:", error);
		return [];
	}
}
