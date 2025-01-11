import Link from "next/link";

export default function AZList() {
	const items = [
		"All",
		"0-9",
		...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), // Generates A-Z
	];

	return (
		<div className='mt-[10px] overflow-hidden hidden sm:block'>
			<ul className=' space-x-[8px]'>
				{items.map((item, index) => (
					<li key={index} className='float-left ml-[8px]'>
						<Link
							href={`/${item === "All" ? "" : item}`}
							className='block font-semibold py-[2px] px-[7px] text-[1.3rem] rounded-[3px] mb-[5px] bg-[#2e2e2e] text-[#aaa]'>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
