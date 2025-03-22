import { capitalizeWords } from "@/lib/capitalise";
import Image from "next/image";
import EpisodeNumber from "../TodaysEpisodesPage/EpisodeNumber";
import { Anime } from "@/types/anime";

interface Props {
	anime: Anime;
}

const Card = ({ anime }: Props) => {
	return (
		<div>
			<li className='relative flex flex-col items-center shadow-lg transition-all overflow-hidden rounded-[5px]'>
				<div className='relative w-full aspect-[5/7]'>
					<Image
						src={anime.coverImage.large}
						alt={anime.title.romaji || anime.title.english || "Anime Cover"}
						className='object-cover w-full h-full'
						fill
						sizes='(max-width: 768px) 80vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 20vw'
						quality={100}
						priority
					/>
				</div>
				<div className='flex justify-between px-[8px] text-sm font-semibold bg-[#242424] text-[#aaa] absolute bottom-0 left-0 w-full h-8 leading-8 text-center z-10 overflow rounded-b-[5px]'>
					<EpisodeNumber anime={anime} />
					<div>TV</div>
				</div>
			</li>
			<div className='mt-[12.15px] mb-[10.125px] text-[#aaa] text-[1.2rem] 2xl:text-[1.4rem] font-medium line-clamp-2 leading-[1.5rem] max-h-[3rem] overflow-hidden h-[3.75rem]'>
				{capitalizeWords(anime.title.english) || anime.title.romaji || "Anime Cover"}
			</div>
		</div>
	);
};

export default Card;
