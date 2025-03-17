"use client";
import { useState } from "react";
import { Anime } from "@/types/anime";
import PaginationControls from "./PaginationControls";
import Card from "../Card/Card";

interface Props {
	episodes: Anime[];
}

const EPISODES_PER_PAGE = 12;

export default function EpisodeList({ episodes }: Props) {
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * EPISODES_PER_PAGE;
	const endIndex = startIndex + EPISODES_PER_PAGE;
	const displayedEpisodes = episodes.slice(startIndex, endIndex);

	return (
		<div>
			{/* Pagination Controls */}
			<PaginationControls
				currentPage={currentPage}
				totalEpisodes={episodes.length}
				episodesPerPage={EPISODES_PER_PAGE}
				setCurrentPage={setCurrentPage}
			/>

			<ul className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[20px]'>
				{displayedEpisodes.map((anime, index) => (
					<Card anime={anime} key={index} />
				))}
			</ul>
		</div>
	);
}
