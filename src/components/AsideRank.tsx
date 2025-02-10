import fetchEpisodes from "@/lib/fetchData";
import rank1 from "../../public/rank/1.png";
import rank2 from "../../public/rank/2.png";
import rank3 from "../../public/rank/3.png";
import rank4 from "../../public/rank/4.png";
import rank5 from "../../public/rank/5.png";
import rank6 from "../../public/rank/6.png";
import rank7 from "../../public/rank/7.png";
import rank8 from "../../public/rank/8.png";
import rank9 from "../../public/rank/9.png";

import Image from "next/image";

const rankImages = [rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9];
const borderColors: Record<number, string> = {
	0: "border-[#812bf9]", // First rank
	1: "border-[#bd4c60]", // Second rank
	2: "border-[#ab8445]", // Third rank
};

import { topTodayAnime } from "@/query/topTodayAnime";

export default async function AsideRank() {
	const topTodays = await fetchEpisodes(topTodayAnime);

	return (
		<aside className='w-full min-w-[320px] flex-shrink-0 bg-#242424 space-y-2 lg:px-[10px]  lg:w-1/4'>
			<div className='flex justify-between'>
				<h2>Top Anime</h2>
				<div className='flex gap-3'>
					<p>Today</p>
					<p>Week</p>
					<p>Month</p>
				</div>
			</div>
			{topTodays.map((anime, index) => {
				const borderColor = index < 3 ? borderColors[index] : "border-none";
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

						<span className='relative w-[50px]  h-[65px] xl:w-[60px] xl:h-[78px]'>
							{anime.coverImage?.medium ? (
								<Image
									src={anime.coverImage.medium}
									alt={`Rank ${index + 1}`}
									fill
									sizes='(max-width: 768px) 100px, 150px'
									className='object-cover'
								/>
							) : (
								<div className='w-full h-full bg-gray-200'>No Image</div> // Placeholder for missing image
							)}
						</span>
						<div className='px-[15px]'>
							<div className='text-[1.2rem] leading-[1.5rem] max-h-[3rem] overflow-hidden line-clamp-2'>
								{anime.title.english}
							</div>
						</div>
					</div>
				);
			})}
		</aside>
	);
}
