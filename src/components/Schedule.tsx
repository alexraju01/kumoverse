import Image from "next/image";
import scheduleImg from "../../public/bg-schedule.png";
import Clock from "./Clock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa";

export default function Schedule() {
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
				<div className='relative '>
					<div className='text-[2rem] font-semibold'>Estimated Schedule {<Clock />}</div>
					<div className='flex items-center mt-[15px]'>
						<div className='text-3xl w-[50px] flex justify-center cursor-pointer  self-end h-[45px] leading-[45px] overflow-hidden mb-5 flex-shrink-0'>
							<FaChevronLeft className='chevron-icon ' />
						</div>
						<div className='mx-auto relative overflow-hidden list-none p-0 z-[1] flex-grow'>
							<div className='items relative w-full h-full z-[1] flex transition-transform box-content'>
								{/* <div className='flex flex-shrink-0 w-full h-full relative transition-transform'> */}
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Mon</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Tue</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Wed</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Thu</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Fri</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Sat</div>
									</div>
								</div>
								<div className='day'>
									<div className='inner-day'>
										<div>Jan 28</div>
										<div className='day-text'>Sun</div>
									</div>
								</div>
								{/* </div> */}
							</div>
						</div>
						<span>
							<FaChevronRight className='chevron-icon' />
						</span>
					</div>
				</div>
			</div>
			<div className='bg-[#171717] w-full '>
				<div className=' items py-[20px]'>items1 </div>
				<div className=' items py-[20px]'>items1 </div>
			</div>
			<div className='bg-[#181818] border-t border-[#202020] text-center p-[12px] text-[1.1rem] cursor-pointer transition-all duration-300 text-[#666] hover:bg-[#1d1d1d] hover:text-[#aaa]'>
				Show more
			</div>
		</div>
	);
}
