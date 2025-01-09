import fetchEpisodes from "@/lib/fetchData";
import rank1 from "../../public/rank/1.png";
import rank2 from "../../public/rank/2.png";
import rank3 from "../../public/rank/3.png";
import rank4 from "../../public/rank/4.png";
import rank5 from "../../public/rank/5.png";

import Image from "next/image";

const rankImages = [rank1, rank2, rank3, rank4, rank5];
const borderColors: Record<number, string> = {
	0: "border-[#812bf9]", // First rank
	1: "border-[#bd4c60]", // Second rank
	2: "border-[#ab8445]", // Third rank
};

import { topTodayAnime } from "@/query/topTodayAnime";

export default async function AsideRank() {
	const topTodays = await fetchEpisodes(topTodayAnime);

	return (
		<aside className='w-1/4 min-w-[320px] flex-shrink-0 px-[10px] bg-#0E0E0E space-y-2'>
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
					<div key={index} className={`aside-card border-r-2 ${borderColor}`}>
						<div className='rank-background w-[50px] h-[55px]'>
							<Image
								src={rankImages[index]}
								alt={`Rank ${index + 1}`}
								fill
								className='object-contain'
							/>
						</div>
						<span className='relative w-[60px] h-[78px]'>
							<Image
								src={anime.coverImage.medium}
								alt={`Rank ${index + 1}`}
								fill
								className='object-cover'
							/>
						</span>
					</div>
				);
			})}

			{/* <div className='aside-card border-r-2 border-[#bd4c60]'>
				<div className='rank-background'>
					<Image src={rank2} alt='Rank 1' fill className='object-contain' />
				</div>
			</div>{" "}
			<div className='aside-card border-r-2 border-[#ab8445]'>
				<div className='rank-background'>
					<Image src={rank3} alt='Rank 1' fill className='object-contain' />
				</div>
			</div>{" "}
			<div className='aside-card'>
				<div className='rank-background'>
					<Image src={rank4} alt='Rank 1' fill className='object-contain' />
				</div>
			</div>{" "}
			<div className='aside-card'>
				<div className='rank-background'>
					<Image src={rank5} alt='Rank 1' fill className='object-contain' />
				</div>
			</div> */}
		</aside>
	);
}
