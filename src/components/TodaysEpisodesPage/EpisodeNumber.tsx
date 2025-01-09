"use client";

import { Anime } from "@/types/anime";
import { useState, useEffect } from "react";

interface EpisodeNumberProps {
	anime: Anime;
}

export default function EpisodeNumber({ anime }: EpisodeNumberProps) {
	console.log(anime);
	const [currentEpisode, setCurrentEpisode] = useState(
		anime.nextAiringEpisode?.episode ? anime.nextAiringEpisode.episode - 1 : null
	);

	useEffect(() => {
		if (anime.nextAiringEpisode?.episode) {
			// Update the state with the latest valid episode
			setCurrentEpisode(anime.nextAiringEpisode.episode - 1);
		}
	}, [anime.nextAiringEpisode]);

	return (
		<div
			className="relative px-1 h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
            before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
            before:transform before:skew-x-[345deg] before:rounded-[1.5px]  before:bg-[#552A92] before:z-[1]">
			<span className='relative z-[2] text-[#bbb]'>
				{currentEpisode !== null ? currentEpisode : "CC"}
			</span>
		</div>
	);
}
