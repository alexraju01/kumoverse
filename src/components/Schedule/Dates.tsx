"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface Day {
	day: string;
	date: string;
}
interface ScheduleItem {
	title: string;
	date: string;
}

export default function Dates({ days, items }: { days: Day[]; items: ScheduleItem[] }) {
	const [startIndex, setStartIndex] = useState(0);
	const [translateStep, setTranslateStep] = useState(1);

	useEffect(() => {
		const updateTranslateStep = () => {
			setTranslateStep(window.innerWidth < 768 ? 3 : 2);
		};
		updateTranslateStep();
		window.addEventListener("resize", updateTranslateStep);
		return () => window.removeEventListener("resize", updateTranslateStep);
	}, []);

	const nextDay = () => setStartIndex((prev) => Math.min(prev + translateStep, days.length - 7));
	const prevDay = () => setStartIndex((prev) => Math.max(prev - translateStep, 0));

	const visibleDays = days.slice(startIndex, startIndex + 7);

	// 🔎 Filter items based on visibleDays
	const itemsByDay = visibleDays.map((day) => {
		const dayItems = items.filter((item) => item.date === day.date);
		return {
			date: day.date,
			episodes: dayItems.length > 0 ? dayItems : [{ title: "No episodes" }],
		};
	});

	return (
		<>
			<div className='flex items-center mt-[15px]'>
				<div
					onClick={prevDay}
					className='text-3xl w-[50px] flex justify-center cursor-pointer self-end h-[45px] leading-[45px] overflow-hidden mb-5 flex-shrink-0'>
					<FaChevronLeft className='chevron-icon ' />
				</div>
				<div className='mx-auto relative overflow-hidden list-none p-0 z-[1] flex-grow'>
					<div className='items relative w-full h-full z-[1] flex transition-transform box-content'>
						{visibleDays.map((day, index) => (
							<div key={index} className='day'>
								<div className='inner-day'>
									<div>{day.date}</div>
									<div className='day-text'>{day.day}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='cursor-pointer' onClick={nextDay}>
					<FaChevronRight className='chevron-icon' />
				</div>
			</div>

			{/* Render episode list */}
			<div className='bg-[#171717] w-full'>
				{itemsByDay.map((group, i) => (
					<div key={i} className='py-5 border-b border-[#202020] px-4'>
						<h3 className='text-[#999] text-sm mb-2'>{group.date}</h3>
						<ul className='text-white space-y-1'>
							{group.episodes.map((ep, j) => (
								<li key={j}>{ep.title}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className='bg-[#181818] border-t border-[#202020] text-center p-[12px] text-[1.1rem] cursor-pointer transition-all duration-300 text-[#666] hover:bg-[#1d1d1d] hover:text-[#aaa]'>
				Show more
			</div>
		</>
	);
}
