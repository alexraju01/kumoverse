import rank1 from "../../../public/rank/1.png";
import rank3 from "../../../public/rank/3.png";
import rank4 from "../../../public/rank/4.png";
import rank2 from "../../../public/rank/2.png";
import rank5 from "../../../public/rank/5.png";
import rank6 from "../../../public/rank/6.png";
import rank7 from "../../../public/rank/7.png";
import rank8 from "../../../public/rank/8.png";
import rank9 from "../../../public/rank/9.png";

import Image from "next/image";

const rankImages = [rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9];
const borderColors: Record<number, string> = {
	0: "border-[#812bf9]", // First rank
	1: "border-[#bd4c60]", // Second rank
	2: "border-[#ab8445]", // Third rank
};

import { topTodayAnime } from "@/query/topTodayAnime";
import { capitalizeWords } from "@/lib/capitalise";
import EpisodeNumber from "../TodaysEpisodesPage/EpisodeNumber";
import { fetchGraphQL } from "@/lib/fetchData";

export default async function AsideRank() {
	const topTodays = await fetchGraphQL(topTodayAnime);

	return (
		<aside className='w-full px-[1rem] min-w-[320px] flex-shrink-0 bg-#242424 space-y-2 xl:px-[10px]  xl:w-1/4'>
			<div className='flex justify-between'>
				<h2 className='text-[2rem]'>Top Anime</h2>
				<div>
					<div className='flex bg-itemBackground p-[3px] items-center rounded-[5px]'>
						<p className='aside-toogle-tab'>Day</p>
						<p className='aside-toogle-tab'>Week</p>
						<p className='aside-toogle-tab'>Month</p>
					</div>
				</div>
			</div>
			{topTodays.map((anime, index) => {
				const borderColor = index < 3 ? borderColors[index] : "border-none";
				const titleCheck = capitalizeWords(
					anime.title.english?.toLowerCase() || anime.title.romaji?.toLowerCase()
				);
				return (
					<div key={index} className={`aside-card border-r-[2px] ${borderColor}`}>
						<div className='rank-background w-[50px] h-[55px]'>
							{rankImages[index] ? (
								<Image
									src={rankImages[index]}
									alt={`Rank ${index + 1}`}
									fill
									sizes='(max-width: 768px) 50px, 100px'
									className='object-contain'
								/>
							) : (
								<div className='w-full h-full bg-gray-300'>No Rank Image</div> // Placeholder for missing rank image
							)}
						</div>

						<div>
							{anime.coverImage?.medium ? (
								<div className='relative w-[50px] h-[65px]  xl:w-[60px] xl:h-[78px]'>
									<Image
										src={anime.coverImage.medium}
										alt={`Rank ${index + 1}`}
										fill
										sizes='(max-width: 768px) 100px, 150px'
										className='object-cover' // Ensures images retain aspect ratio
									/>
								</div>
							) : (
								<div className='w-full h-full bg-gray-200'>No Image</div>
							)}
						</div>
						<div className='mx-5 text-[#aaa]'>
							<p className='font-medium mb-1.5  text-[1.2rem] 2xl:text-[1.4rem] leading-6 max-h-[3rem] block overflow-hidden line-clamp-2'>
								{titleCheck}
							</p>

							<div className='flex flex-wrap font-medium mb-1.5 text-[1.5rem] leading-6 line-clamp-2'></div>
							<EpisodeNumber anime={anime} />
						</div>
					</div>
				);
			})}
		</aside>
	);
}
