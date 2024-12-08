export interface Anime {
	title: {
		romaji?: string;
		english?: string;
	};
	nextAiringEpisode?: {
		airingAt: number;
		episode: number;
	};
	coverImage: {
		medium: string; // URL for the cover image
		large: string;
	};
	episodes?: number; // Total number of episodes
}
