import TodaysEpisodesPage from "@/components/TodaysEpisodesPage/TodaysEpisodesPage";
import rank1 from "../../public/rank/1.png";
import rank2 from "../../public/rank/2.png";
import rank3 from "../../public/rank/3.png";
import rank4 from "../../public/rank/4.png";
import rank5 from "../../public/rank/5.png";

import Image from "next/image";

export default function Home() {
	return (
		<div className='container mx-auto '>
			<div className='flex -mx-[10px] flex-col xl:flex-row'>
				<TodaysEpisodesPage className=' px-[10px]  bg-[#0E0E0E]' />
				<aside className='w-1/4 min-w-[320px] flex-shrink-0 px-[10px] bg-#0E0E0E space-y-2'>
					<div className='flex justify-between'>
						<h2>Top Anime</h2>
						<div className='flex gap-3'>
							<p>Today</p>
							<p>Week</p>
							<p>Month</p>
						</div>
					</div>
					<div className='aside-card'>
						<div className='rank-background'>
							<Image src={rank1} alt='Rank 1' fill className='object-contain' />
						</div>
					</div>
					<div className='aside-card'>
						<div className='rank-background'>
							<Image src={rank2} alt='Rank 1' fill className='object-contain' />
						</div>
					</div>{" "}
					<div className='aside-card'>
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
					</div>
				</aside>
			</div>
			<div>jshdgfjhksdg</div>
		</div>
	);
}
