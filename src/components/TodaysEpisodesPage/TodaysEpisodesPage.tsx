import { ClassName } from "@/types/props";
import Image from "next/image";

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
      Page(page: 1, perPage: 12) {
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

export default async function TodaysEpisodesPage({ className }: ClassName) {
	const episodes = await fetchEpisodes();

	return (
		<div className={`w-full ${className || ""}`}>
			<h1 className='text-3xl font-bold text-center mb-6 text-white'>
				Trending Anime Episodes
			</h1>
			<ul className=' grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
				{episodes.map((anime, index) => (
					<li
						key={index}
						className='relative flex flex-col items-center gap-2  bg-gray-800 rounded-lg shadow-lg transition-all'>
						<div className='relative w-full aspect-[3/4]'>
							<Image
								src={anime.coverImage.large}
								alt={anime.title.romaji || anime.title.english || "Anime Cover"}
								className='object-cover w-full h-full rounded-t-lg'
								fill
							/>
						</div>

						<div className='flex flex-col items-center px-2 text-center'>
							<span className='bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 left-2'>
								{anime.nextAiringEpisode
									? `Ep ${anime.nextAiringEpisode.episode - 1}`
									: "CC"}
							</span>
							<strong className='text-sm font-semibold text-white w-full text-center line-clamp-2'>
								{anime.title.romaji || anime.title.english}
							</strong>

							{/* <span className='text-gray-400 text-xs'>
								{anime.episodes ? `Total: ${anime.episodes}` : "Unknown"}
							</span> */}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
