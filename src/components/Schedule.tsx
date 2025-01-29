import Image from "next/image";
import scheduleImg from "../../public/bg-schedule.png";
import Clock from "./Clock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa";

export default function Schedule() {
	return (
		<div className=' mb-[40px] rounded-md overflow-hidden'>
			<div className='relative pt-[20px]  px-[10px]  h-[168px]'>
				{/* Background Image */}
				<Image
					src={scheduleImg}
					alt='Background'
					quality={100}
					fill
					className='object-cover object-top '
				/>
				{/* Content Above Image */}
				<div className='relative '>
					<div className='text-[2rem] font-semibold'>Estimated Schedule {<Clock />}</div>
					<div className='flex items-center mt-[15px]'>
						<div className='text-3xl w-[50px] flex justify-center cursor-pointer  self-end h-[45px] leading-[45px] overflow-hidden mb-5 flex-shrink-0'>
							<FaChevronLeft className='text-[3rem] text-[#AAAAAA] font-black ' />
						</div>
						<div className='mx-auto relative overflow-hidden list-none p-0 z-[1] flex-grow'>
							<div className='items relative w-full h-full z-[1] flex transition-transform box-content'>
								{/* <div className='flex flex-shrink-0 w-full h-full relative transition-transform'> */}
								<div className='day w-[33.33333333%] md:w-[20%] lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Mon</div>
									</div>
								</div>
								<div className='day w-[33.33333333%] md:w-[20%] lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Tue</div>
									</div>
								</div>
								<div className='day w-[33.33333333%] md:w-[20%] lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Wed</div>
									</div>
								</div>
								<div className='day w-[33.33333333%] md:w-[20%] lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Thu</div>
									</div>
								</div>
								<div className='day w-[33.33333333%] md:w-[20%] lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Fri</div>
									</div>
								</div>
								<div className='day w-[33.33333333%]md:w-[20%]  lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Sat</div>
									</div>
								</div>
								<div className='day w-[33.33333333%]md:w-[20%]  lg:w-[14.2857142857%] flex-shrink-0'>
									<div className='inner uppercase text-[#444] transition-all duration-300 float-left relative cursor-pointer pb-5'>
										<div>Jan 28</div>
										<div className='font-BebasNeue text-[4.2rem] h-[45px] leading-[45px]'>Sun</div>
									</div>
								</div>
								{/* </div> */}
							</div>
						</div>
						<span>
							<FaChevronRight className='text-[3rem] text-[#AAAAAA] font-black ' />
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
