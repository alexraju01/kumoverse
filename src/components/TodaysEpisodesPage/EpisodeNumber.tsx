"use client";

import { Anime } from "@/types/anime";
import Image from "next/image";
import { useState, useEffect } from "react";
import ccImage from "../../../public/icon-sub2.svg";

interface EpisodeNumberProps {
	anime: Anime;
}

export default function EpisodeNumber({ anime }: EpisodeNumberProps) {
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
			className="relative h-[1.29rem] leading-[1.29rem] mr-2 inline-block rounded-[1.5px] align-baseline
        before:absolute before:left-[-2.5px] before:top-0 before:w-[calc(100%_+_5px)] before:h-[1.29rem] before:content-[''] 
        before:transform before:skew-x-[345deg] before:rounded-[1.5px] before:bg-[#552A92] before:z-[1]">
			<span className='flex items-center justify-center gap-[0.25rem] relative z-[2] text-[#bbb] h-full'>
				<Image
					src={ccImage}
					className='h-[12.32px] w-[12.32px] object-contain'
					alt='Subtitle Logo'
					width={12.32}
					height={12.32}
				/>
				<span className='text-sm leading-[1.29rem]'>
					{currentEpisode !== null ? currentEpisode : "CC"}
				</span>
			</span>
		</div>
	);
}
