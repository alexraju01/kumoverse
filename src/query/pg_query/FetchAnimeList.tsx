import { prisma } from "@/lib/prisma";

export const FetchAnimeList = async () => {
	try {
		const animeList = await prisma.recentAnimeList.findMany({
			orderBy: {
				airing_at: "desc",
			},
		});
		return animeList;
	} catch (error) {
		console.error("Error fetching anime list:", error);
		return [];
	}
};
