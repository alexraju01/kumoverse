"use client";
import Image from "next/image";
import scheduleImg from "../../public/bg-schedule.png";
import Clock from "./Footer/Clock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

const generateWeekDays = () => {
	const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "2-digit" };
	return Array.from({ length: 30 }, (_, i) => {
		const date = new Date();
		date.setDate(date.getDate() + i);
		const [day, month, dateNum] = date
			.toLocaleDateString("en-US", options)
			.replace(",", "")
			.split(" ");
		return { day, date: `${dateNum} ${month}` };
	});
};

export default function Schedule() {
	const [days, setDays] = useState(generateWeekDays());
	const [startIndex, setStartIndex] = useState(0);
	const [translateStep, setTranslateStep] = useState(1); // Default to 1

	useEffect(() => {
		const updateTranslateStep = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setTranslateStep(3); // Move all dates on small screens
			} else {
				setTranslateStep(2); // Move 2 dates on small desktops
			}
		};

		updateTranslateStep();
		window.addEventListener("resize", updateTranslateStep);

		return () => window.removeEventListener("resize", updateTranslateStep);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => setDays(generateWeekDays()), 86400000); // Refresh every 24h
		return () => clearInterval(interval);
	}, []);

	const nextDay = () => setStartIndex((prev) => Math.min(prev + translateStep, days.length - 7));
	const prevDay = () => setStartIndex((prev) => Math.max(prev - translateStep, 0));

	const visibleDays = days.slice(startIndex, startIndex + 7);

	return (
		<div className='mb-[40px] rounded-md overflow-hidden'>
			<div className='relative pt-[20px]  px-[10px]  h-[168px]'>
				{/* Background Image */}
				<Image
					src={scheduleImg}
					alt='Background'
					quality={100}
					fill
					className='object-cover object-top'
				/>
				{/* Content Above Image */}
				<div className='relative'>
					<div className='flex items-center gap-2 text-[2rem] font-semibold'>
						<h2>Estimated Schedule</h2>
						<Clock />
					</div>
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
						<div onClick={nextDay}>
							<FaChevronRight className='chevron-icon' />
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#171717] w-full'>
				{Array(2)
					.fill("items1")
					.map((item, i) => (
						<div key={i} className='py-5'>
							{item}
						</div>
					))}
			</div>
			<div className='bg-[#181818] border-t border-[#202020] text-center p-[12px] text-[1.1rem] cursor-pointer transition-all duration-300 text-[#666] hover:bg-[#1d1d1d] hover:text-[#aaa]'>
				Show more
			</div>
		</div>
	);
}
