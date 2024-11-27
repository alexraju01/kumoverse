import UpComingAnime from "@/components/UpComingAnime/UpComingAnime";

export default function Home() {
	return (
		<div className="flex -mx-[10px] flex-col xl:flex-row">
			<UpComingAnime className="flex-grow  w-[1px] px-[10px] bg-[#0E0E0E]" />
			<aside className="w-1/4 min-w-[320px] flex-shrink-0 px-[10px] bg-#0E0E0E space-y-2">
				<div className="bg-[#242424] h-[50px] rounded overflow-hidden transition-all duration-200 flex items-center"></div>
				<div className="bg-[#242424] h-[50px] rounded overflow-hidden transition-all duration-200 flex items-center"></div>
				<div className="bg-[#242424] h-[50px] rounded overflow-hidden transition-all duration-200 flex items-center"></div>
				<div className="bg-[#242424] h-[50px] rounded overflow-hidden transition-all duration-200 flex items-center"></div>
			</aside>
		</div>
	);
}
