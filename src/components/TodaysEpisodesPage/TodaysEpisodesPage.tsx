// import { todaysEpisode } from "@/query/todaysEpisode";
import fetchEpisodes from "@/lib/fetchData";
import { todaysEpisode } from "@/query/todaysEpisode";
import { ClassName } from "@/types/props";
import Image from "next/image";
import EpisodeNumber from "./EpisodeNumber";
import { Anime } from "@/types/anime";
import Schedule from "../Schedule";

export default async function TodaysEpisodesPage({ className }: ClassName) {
	const episodes: Anime[] = await fetchEpisodes(todaysEpisode);
	console.log(episodes);
	return (
		<div className={`w-full ${className}`}>
			<div className='flex  flex-col md:flex-row justify-between mb-4'>
				<h1 className='text-2xl font-semibold text-gray-300 witespace-nowrap text-[2rem]'>
					Recent Updates
				</h1>
				<div className='flex items-center text-lg space-x-4'>
					<nav className='space-x-3'>
						{["All", "Sub", "Dub", "Chinese", "Trending", "Random"].map((item) => (
							<button key={item} className='text-gray-400 hover:text-gray-300'>
								{item}
							</button>
						))}
					</nav>
					<div className='flex space-x-2'>
						<span title='Icon 1'>
							<i className='icon-class-1'></i>
						</span>
						<span title='Icon 2'>
							<i className='icon-class-2'></i>
						</span>
					</div>
				</div>
			</div>

			<ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
				{episodes.map((anime, index) => (
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
								{/* <div className='flex gap-[7px] items-center'> */}
								{/* <div
										className="relative px-1 h-[1.29rem] leading-[1.29rem]  inline-block rounded-[1.5px] align-baseline
  before:absolute before:left-[-2.5px] before:top-0  before:w-[calc(100%_+_1px)] before:h-[1.29rem] before:content-[''] 
  before:transform before:rounded-[1.5px] before:bg-[#552A92] before:z-[1]
  after:absolute after:right-[-2.5px] after:left-0 after:top-0 after:w-[calc(100%_+_0px)] after:h-[1.29rem]   after:content-[''] 
  after:origin-right after:rounded-[1.5px] after:bg-[#552A92] after:z-[0] after:skew-x-[345deg] "> */}
								<EpisodeNumber anime={anime} />
								{/* </div> */}
								{/* {anime.episodes && (
										<div
											className="relative px-1 h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
										before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
										before:transform before:skew-x-[345deg] before:rounded-[1.5px] before:bg-[#666] before:z-[1]">
											<span className='relative z-[2] text-[#bbb]'>{anime.episodes}</span>
										</div>
									)} */}
								{/* </div> */}
								<div>TV</div>
							</div>
						</li>
						<div className=' mt-[12.15px] mb-[10.125px] text-[#aaa] text-[16.2px] font-medium line-clamp-2 leading-[1.5rem] max-h-[3rem] overflow-hidden h-[3.75rem]'>
							{anime.title.english || anime.title.romaji || "Anime Cover"}
						</div>
					</div>
				))}
			</ul>
			<Schedule />
		</div>
	);
}
