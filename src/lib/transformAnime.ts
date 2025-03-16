import { Anime } from "@/types/anime";

export function transformAnimeData(animeList: Anime[]) {
	return animeList.map((anime) => ({
		romajiTitle: anime.title.romaji,
		englishTitle: anime.title.english ?? null,
		airingAt: anime.nextAiringEpisode?.airingAt ?? null,
		episode: anime.nextAiringEpisode?.episode ?? null,
		coverLarge: anime.coverImage?.large ?? "",
		coverMedium: anime.coverImage?.medium ?? "",
		episodes: anime.episodes ?? null,
		popularity: anime.popularity,
		createdAt: new Date(),
	}));
}
