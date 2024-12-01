const ANILIST_API_URL = "https://graphql.anilist.co";

// Define types for AniList API response
interface Anime {
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

interface ApiResponse {
	data: {
		Page: {
			media: Anime[];
		};
	};
}

async function fetchEpisodes(): Promise<Anime[]> {
	const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(type: ANIME, status: RELEASING, sort: TRENDING_DESC) {
          title {
            romaji
            english
          }
          nextAiringEpisode {
            airingAt
            episode
          }
          coverImage {
            medium
            large
          }
          episodes
        }
      }
    }
  `;

	const response = await fetch(ANILIST_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data from AniList API");
	}

	const data: ApiResponse = await response.json();

	return data.data.Page.media;
}

export default async function TodaysEpisodesPage() {
	const episodes = await fetchEpisodes();

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<h1 className='text-3xl font-bold text-center mb-6'>
				Trending Anime Episodes
			</h1>
			<ul className='list-none p-0'>
				{episodes.map((anime, index) => (
					<li
						key={index}
						className='flex items-center gap-4 mb-6 border rounded-lg p-4 shadow-lg'>
						<img
							src={anime.coverImage.large}
							alt={anime.title.romaji || anime.title.english || "Anime Cover"}
							className='w-44 h-auto object-cover rounded-lg'
						/>
						<div className='flex flex-col'>
							<strong className='text-lg font-semibold'>
								{anime.title.romaji || anime.title.english}
							</strong>
							<span className='text-gray-600'>
								{anime.nextAiringEpisode
									? `Episode ${anime.nextAiringEpisode.episode}`
									: "No upcoming episode information"}
							</span>
							<span className='text-gray-500'>
								{anime.episodes
									? `Total Episodes: ${anime.episodes}`
									: "Total Episodes: Unknown"}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
