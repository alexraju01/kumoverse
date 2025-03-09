import Image from "next/image";
import bgFooter from "../../../public/bg-footer.jpg";
import AZList from "./AZList";
export default function Footer() {
	return (
		<footer className='w-full px-[10px] relative py-[80px] mt-[60px] 2xl:px-[60px]'>
			<Image
				src={bgFooter}
				quality={100}
				alt={"footer"}
				fill={true}
				className='object-cover z-[-1]'
			/>
			<div className='flex text-white mb-[40px]'>
				<header className='text-white text-[2rem] leading-[2rem] font-semibold'>A-Z List </header>
				<p className='text-[#666] ml-[15px] self-end text-[1.1rem] leading-[1.5rem]'>
					Searching anime order by alphabet name A to Z.
				</p>
			</div>
			<AZList />
		</footer>
	);
}
