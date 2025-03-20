// import fetchEpisodes from "@/lib/fetchData";
import { fetchGraphQL } from "@/lib/fetchData";
import { getTodayTimestamps } from "@/lib/getTodayTimestamps";
import { airingTodayAnime } from "@/query/airingTodayAnime";
import { Anime } from "@/types/anime";
import Image from "next/image";

// Function to get Unix timestamps for today's start and end

const fetchAiringTodayAnime = async (): Promise<Anime[]> => {
	try {
		const data = await fetchGraphQL(airingTodayAnime);
		const { startOfDay, endOfDay } = getTodayTimestamps();
		const airingToday = data.filter((anime: Anime) => {
			const airingAt = anime.nextAiringEpisode?.airingAt;
			return airingAt && airingAt >= startOfDay && airingAt <= endOfDay;
		});
		// ✅ Call the API route to insert data
		// if (airingToday.length > 0) {
		// 	await fetchData(`/api/anime/recent`, "POST", airingToday);

		// }

		return airingToday;
	} catch (error) {
		console.error("Error fetching airing today anime:", error);
		return [];
	}
};

// Server Component
export default async function AnimeAiringTodayPage() {
	const animeList = await fetchAiringTodayAnime();

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold mb-4'>Anime Airing Today 📺</h1>

			{animeList?.length === 0 ? (
				<p>No anime airing today.</p>
			) : (
				<ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
					{animeList?.map((anime, index) => (
						<div key={index}>
							<li className='relative flex flex-col  items-center shadow-lg transition-all overflow-hidden rounded-[5px]'>
								<div className='relative w-full aspect-[5/7]'>
									<Image
										src={anime.coverImage.large}
										alt={anime.title.romaji || anime.title.english || "Anime Cover"}
										className='object-cover w-full h-full'
										fill
										sizes='(max-width: 768px) 80vw, 
                                                    (max-width: 1024px) 50vw, 
                                                    (max-width: 1440px) 33vw, 
                                                    20vw' // Adjust sizes for different breakpoints
										quality={100}
									/>
								</div>
								<div className='flex justify-between px-[8px] text-sm font-semibold bg-[#242424] text-[#aaa] absolute bottom-0 left-0 w-full h-8 leading-8 text-center z-10 overflow rounded-b-[5px] '>
									<div>TV</div>
								</div>
							</li>
							<div className=' mt-[12.15px] mb-[10.125px] text-[#aaa] text-[16.2px] font-medium line-clamp-2 leading-[1.5rem] max-h-[3rem] overflow-hidden h-[3.75rem]'>
								{anime.title.english || anime.title.romaji || "Anime Cover"}
							</div>
						</div>
					))}
				</ul>
			)}

			{/* {GetAnimeList.length === 0 ? (
				<p>No anime airing today.</p>
			) : (
				<ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
					{GetAnimeList.map((anime: APIAnime, index) => (
						<div key={index}>
							<li className='relative flex flex-col items-center shadow-lg transition-all overflow-hidden rounded-[5px]'>
								<div className='relative w-full aspect-[5/7]'>
									<Image
										src={anime.cover_image_large}
										alt={anime.romaji_title || "Anime Cover"}
										className='object-cover w-full h-full'
										fill
										sizes='(max-width: 768px) 80vw, 
                                (max-width: 1024px) 50vw, 
                                (max-width: 1440px) 33vw, 
                                20vw' // Adjust sizes for different breakpoints
										quality={100}
									/>
								</div>
								<div className='flex justify-between px-[8px] text-sm font-semibold bg-[#242424] text-[#aaa] absolute bottom-0 left-0 w-full h-8 leading-8 text-center z-10 overflow rounded-b-[5px] '>
									<div>TV</div>
								</div>
							</li>
							<div className='mt-[12.15px] mb-[10.125px] text-[#aaa] text-[16.2px] font-medium line-clamp-2 leading-[1.5rem] max-h-[3rem] overflow-hidden h-[3.75rem]'>
								{anime.english_title || anime.romaji_title || "Unknown Title"}
							</div>
						</div>
					))}
				</ul>
			)} */}
		</div>
	);
}
