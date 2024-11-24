// Type for Pagination Information
export interface Pagination {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: {
		count: number;
		total: number;
		per_page: number;
	};
}

// Type for Image URLs
export interface AnimeImage {
	jpg: {
		image_url: string;
		small_image_url: string;
		large_image_url: string;
	};
	webp: {
		image_url: string;
		small_image_url: string;
		large_image_url: string;
	};
}

// Type for Trailer Information
export interface Trailer {
	youtube_id: string | null;
	url: string | null;
	embed_url: string | null;
}

// Type for Titles
export interface Title {
	type: string; // "Default", "English", "Japanese", or "Synonym"
	title: string;
}

// Type for Producers, Studios, Genres, etc.
export interface Entity {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

// Main Anime Type
export interface Anime {
	mal_id: number;
	url: string;
	images: AnimeImage;
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string | null;
	title_japanese: string | null;
	title_synonyms: string[];
	type: string | null; // "TV", "Movie", etc.
	source: string | null; // "Manga", "Light novel", etc.
	episodes: number | null;
	status: string; // "Airing", "Finished Airing", "Not yet aired"
	airing: boolean;
	aired: {
		from: string | null; // ISO Date
		to: string | null; // ISO Date
		string: string; // Human-readable date range
	};
	duration: string | null; // E.g., "24 min per ep"
	rating: string | null; // E.g., "PG-13 - Teens 13 or older"
	score: number | null;
	scored_by: number | null;
	rank: number | null;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string | null;
	background: string | null;
	season: string | null; // "spring", "summer", etc.
	year: number | null;
	broadcast: {
		day: string | null;
		time: string | null;
		timezone: string | null;
		string: string | null; // E.g., "Saturdays at 22:00 (JST)"
	};
	producers: Entity[];
	licensors: Entity[];
	studios: Entity[];
	genres: Entity[];
	explicit_genres: Entity[];
	themes: Entity[];
	demographics: Entity[];
}

// Full API Response Type
export interface UpcomingAnime {
	pagination: Pagination;
	data: Anime[];
}
