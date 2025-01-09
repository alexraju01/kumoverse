import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Title {
	romaji: string;
	english: string;
}

export interface NextAiringEpisode {
	airingAt?: number | null;
	episode?: number | null;
}

export interface CoverImage {
	medium: string | StaticImport;
	large: string | StaticImport;
}

export interface Anime {
	title: Title;
	nextAiringEpisode?: NextAiringEpisode | null;
	coverImage: CoverImage;
	episodes?: number | null;
}
