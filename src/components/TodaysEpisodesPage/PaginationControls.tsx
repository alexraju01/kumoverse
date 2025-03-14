"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import default styles

interface Props {
	currentPage: number;
	totalEpisodes: number;
	episodesPerPage: number;
	setCurrentPage: (page: number) => void;
}

export default function PaginationControls({
	currentPage,
	totalEpisodes,
	episodesPerPage,
	setCurrentPage,
}: Props) {
	return (
		<div className='flex flex-col md:flex-row justify-between mb-[15px]'>
			<h1 className=' font-semibold text-gray-300 whitespace-nowrap text-[2rem]'>
				Recently Updated
			</h1>
			<div className='flex items-center text-[1.2rem] font-semibold space-x-4'>
				<nav className='space-x-3'>
					{["All", "Sub", "Dub", "Chinese", "Trending", "Random"].map((item) => (
						<button key={item} className='text-[#666] hover:text-[#aaa]'>
							{item}
						</button>
					))}
				</nav>
				<div className='flex '>
					<button
						onClick={() => setCurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
						data-tooltip-id='prev-tooltip'
						data-tooltip-content={`Page ${currentPage}`}
						className={` rounded-lg text-[#666] ${
							currentPage === 1 ? "opacity-50" : "hover:text-[#aaa]"
						}`}>
						<FaChevronLeft className='recent-update-icon text-[1.2rem] font-semibold' />
					</button>
					<Tooltip
						id='prev-tooltip'
						place='top'
						className='!bg-[#D8D8D8] !text-black !px-[3px]  !text-[0.8rem] !py-[2px] z-50 !rounded-md'
					/>

					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						disabled={currentPage * episodesPerPage >= totalEpisodes}
						data-tooltip-id='next-tooltip'
						data-tooltip-content={`Page ${currentPage + 1}`}
						className={`p-2 rounded-lg text-[#666] ${
							currentPage * episodesPerPage >= totalEpisodes ? "opacity-50 " : "hover:text-[#aaa]"
						}`}>
						<FaChevronRight className='recent-update-icon' />
					</button>
					<Tooltip
						id='next-tooltip'
						place='top'
						style={{ transform: "" }}
						className='!bg-[#D8D8D8] !text-black !text-[0.8rem] !px-[3px] !py-[2px] z-50 !rounded-md'
					/>
				</div>
			</div>
		</div>
	);
}
