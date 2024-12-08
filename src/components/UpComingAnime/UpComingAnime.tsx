// import fetchData from "@/lib/fetchData";
// import { Anime, UpcomingAnime } from "@/types/anime";
// import { ClassName } from "@/types/props";
// import Image from "next/image";

// export default async function UpComingAnime({ className }: ClassName) {
// 	// Use the type for fetchData
// 	const upcoming: UpcomingAnime = await fetchData(
// 		"v4",
// 		"top/anime?filter=upcoming"
// 	);

// 	// Filter out duplicates by `mal_id`
// 	const uniqueAnime = upcoming.data.filter(
// 		(anime, index, self) =>
// 			index === self.findIndex((a) => a.mal_id === anime.mal_id)
// 	);

// 	return (
// 		<section className={`w-full  bg-primary-900 ${className || ""}`}>
// 			<div className='flex flex-col md:flex-row justify-between mb-4'>
// 				<h1 className='text-2xl font-semibold text-gray-300 whitespace-nowrap'>
// 					Upcoming
// 				</h1>
// 				<div className='flex items-center text-lg space-x-4'>
// 					<nav className='space-x-3'>
// 						{["All", "Sub", "Dub", "Chinese", "Trending", "Random"].map(
// 							(item) => (
// 								<button
// 									key={item}
// 									className='text-gray-400 hover:text-gray-300'>
// 									{item}
// 								</button>
// 							)
// 						)}
// 					</nav>
// 					<div className='flex space-x-2'>
// 						<span title='Icon 1'>
// 							<i className='icon-class-1'></i>
// 						</span>
// 						<span title='Icon 2'>
// 							<i className='icon-class-2'></i>
// 						</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
// 				{uniqueAnime.map((anime: Anime) => {
// 					// Format the release date
// 					const releaseDate = anime.aired?.from
// 						? new Date(anime.aired.from).toLocaleDateString("en-US", {
// 								year: "numeric",
// 								month: "short",
// 								day: "numeric",
// 						  })
// 						: "Unknown";

// 					return (
// 						<div
// 							key={anime.mal_id}
// 							className='bg-gray-800 border border-gray-700 shadow-lg rounded-lg overflow-hidden relative'>
// 							{/* Image Section */}
// 							<div className='relative'>
// 								<Image
// 									src={anime.images.jpg.large_image_url}
// 									alt={anime.title_english || "Anime Image"}
// 									width={300}
// 									height={350} // Reduced the height of the image
// 									className='w-full h-[250px] object-cover' // Adjusted height for smaller cards
// 								/>
// 								{/* Overlay with Score and Type */}
// 								<div className='absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded'>
// 									{anime.type || "Unknown"}
// 								</div>
// 							</div>

// 							{/* Text Section */}
// 							<div className='p-3'>
// 								<h2 className='text-white text-sm font-semibold truncate'>
// 									{anime.title_english || anime.title || "Untitled"}
// 								</h2>
// 								<p className='text-gray-400 text-xs mt-1'>
// 									Release: {releaseDate}
// 								</p>
// 								<p className='text-gray-400 text-xs mt-2 line-clamp-2'>
// 									{anime.synopsis || "No synopsis available."}
// 								</p>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// }
