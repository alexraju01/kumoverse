// import { todaysEpisode } from "@/query/todaysEpisode";
import fetchEpisodes from "@/lib/fetchData";
import { ClassName } from "@/types/props";
import Image from "next/image";

export default async function TodaysEpisodesPage({ className }: ClassName) {
	const episodes = await fetchEpisodes();

	return (
		<div className={`w-full ${className || ""}`}>
			<div className='flex flex-col md:flex-row justify-between mb-4'>
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
			<ul className=' grid grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
				{episodes.map((anime, index) => (
					<li
						key={index}
						className='relative flex flex-col items-center shadow-lg transition-all overflow-hidden rounded-[5px]'>
						<div className='relative w-full aspect-[3/4]'>
							<Image
								src={anime.coverImage.large}
								alt={anime.title.romaji || anime.title.english || "Anime Cover"}
								className='object-cover w-full h-full '
								fill
								quality={100}
							/>
						</div>
						{/* Moved this div inside the li container */}
						<div className='flex justify-between px-[5px] text-sm font-semibold bg-[#242424] text-[#aaa] absolute bottom-0 left-0 w-full h-8 leading-8 text-center z-10 overflow rounded-b-[5px]'>
							{/* {anime.nextAiringEpisode && (
								<div
									className="relative px-1 h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
						before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
						before:transform before:skew-x-[345deg] before:rounded-[1.5px] before:bg-[#666] before:z-[1]">
									<span className='relative z-[2] text-[#bbb]'>
										{anime.nextAiringEpisode
											? `${anime.nextAiringEpisode.episode - 1}`
											: "CC"}
									</span>
								</div>
							)} */}

							{anime.episodes && (
								<div className='flex gap-1 items-center'>
									<div
										className="relative px-1 h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
						before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
						before:transform before:skew-x-[345deg] before:rounded-[1.5px]  before:bg-[#552A92] before:z-[1]">
										<span className='relative z-[2] text-[#bbb]'>
											{anime.nextAiringEpisode ? `${anime.nextAiringEpisode.episode - 1}` : "CC"}
										</span>
									</div>
									<div
										className="relative px-1 h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
									before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
									before:transform before:skew-x-[345deg] before:rounded-[1.5px] before:bg-[#666] before:z-[1]">
										<span className='relative z-[2] text-[#bbb]'>
											{anime?.episodes ? `${anime.episodes}` : "Unknown"}
										</span>
									</div>
								</div>
							)}
							<div>TV</div>
						</div>

						<div className='flex flex-col items-center px-2 text-center'>
							<span className='bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 left-2'>
								{anime.nextAiringEpisode ? `Ep ${anime.nextAiringEpisode.episode - 1}` : "CC"}
							</span>

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
