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
	popularity?: number;
}

export interface APIAnime {
	romaji_title: string;
	english_title: string;
	airing_at?: string | null;
	episode?: number | null;
	cover_image_medium: string;
	cover_image_large: string;
	episodes?: number | null;
	popularity?: number;
}
