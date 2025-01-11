import Link from "next/link";

export default function AZList() {
	const items = [
		"All",
		"0-9",
		...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), // Generates A-Z
	];

	return (
		<div className='mt-[10px]'>
			<ul className=' space-x-[8px]'>
				{items.map((item, index) => (
					<li key={index} className='float-left'>
						<Link href={`/${item === "All" ? "" : item}`}>{item}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
