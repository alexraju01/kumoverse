import Image from "next/image";
import scheduleImg from "../../public/bg-schedule.png";
import Clock from "./Clock";

export default function Schedule() {
	return (
		<div className=''>
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
					<p>Days</p>
				</div>
			</div>
		</div>
	);
}
