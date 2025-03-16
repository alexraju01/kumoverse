export interface Title {
	romaji: string;
	english?: string | null;
}

export interface NextAiringEpisode {
	airingAt?: number; // Unix timestamp
	episode?: number;
}
export interface CoverImage {
	medium: string;
	large: string;
}

export interface Anime {
	// id: number;
	title: Title;
	nextAiringEpisode?: NextAiringEpisode | null;
	coverImage: CoverImage;
	episodes?: number | null;
	popularity: number;
	createdAt: Date;
}
