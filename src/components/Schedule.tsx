"use client";
import Image from "next/image";
import scheduleImg from "../../public/bg-schedule.png";
import Clock from "./Footer/Clock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AiringSchedule } from "./TodaysEpisodesPage/scheduled";
import { FaPlay } from "react-icons/fa";

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

function formatUnixTimestamp(timestamp: number) {
	const dateObj = new Date(timestamp * 1000);

	const day = dateObj.toLocaleDateString("en-US", { weekday: "long" });

	const date = dateObj.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	const time = dateObj.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	return { day, date, time };
}

interface Props {
	scheduledAnime: AiringSchedule[];
}

export default function Schedule({ scheduledAnime }: Props) {
	const [days, setDays] = useState(generateWeekDays());
	const [startIndex, setStartIndex] = useState(0);
	const [translateStep, setTranslateStep] = useState(1); // Default to 1
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const updateTranslateStep = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setTranslateStep(3); // Move all dates on small screens
			} else {
				setTranslateStep(2);
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
						<div className='cursor-pointer' onClick={nextDay}>
							<FaChevronRight className='chevron-icon' />
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#171717] w-full'>
				{scheduledAnime
					.filter((anime) => anime.media.episodes !== null)
					.slice(0, showAll ? scheduledAnime.length : 6)
					.map((anime, index) => {
						const { time } = formatUnixTimestamp(anime.airingAt);
						const bgColor = index % 2 === 0 ? "bg-[#121212]" : "bg-[#171717]";
						const isPast = anime.airingAt < Math.floor(Date.now() / 1000);
						return (
							<div
								key={index}
								className={`group flex md:items-center justify-between px-14 py-4 text-xl text-[#AAAAAA] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#212121] md:bg-[#171717] ${bgColor}  ${
									isPast
										? "text-[#53524F]                                                                                    "
										: ""
								}`}>
								<div className='flex gap-7  flex-col md:flex-row md:gap-8 md:items-center '>
									<time className={`font-semibold ${isPast ? "text-[#53524F]" : ""}`}>{time}</time>
									<p
										className={`transition-colors duration-300 ease-in-out group-hover:text-[#8C5ECE] ${
											isPast ? "text-[#53524F]" : ""
										}`}>
										{anime.media.title.english || anime.media.title.romaji}
									</p>
								</div>

								<div
									className={`min-w-[13rem] place-self-start flex justify-center items-center gap-3  py-2 rounded-full  text-[#AAAAAA] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#5A2E98] ${
										isPast ? "text-[#515151] bg-[#1C1C1C]" : "bg-[#212121]"
									}`}>
									<FaPlay className='text-sm' />
									<span>Episode {anime.media.episodes}</span>
								</div>
							</div>
						);
					})}
			</div>

			{scheduledAnime.length > 6 && (
				<button
					onClick={() => setShowAll((prev) => !prev)}
					className='w-full bg-[#181818] border-t border-[#202020] py-3 text-lg text-[#666] hover:text-[#aaa] hover:bg-[#1d1d1d] transition'>
					{showAll ? "Show less" : "Show more"}
				</button>
			)}
		</div>
	);
}
