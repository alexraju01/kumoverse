import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-navbarBackground text-textSecondar h-[55px] flex justify-between max-w-[1800px] mx-auto items-center px-[10px] text-[12px] lg:text-base">
			<div className="start h-full flex items-center">
				<div className="menu"></div>
				<div className="menu-toggler inline-block text-[1.5rem] cursor-pointer w-[26.6px] h-[26.6px] p-[10px] box-content mr-[10px]">
					<i className="flex w-[26.6px] h-[4px] pointer-events-none relative bg-[#ddd] z-[1] origin-[5px_0] rounded-[1px] my-[3.65px]"></i>
					<i className="flex w-[26.6px] h-[4px] pointer-events-none relative bg-[#ddd] z-[1] origin-[5px_0] rounded-[1px] my-[3.65px] "></i>
					<i className="flex w-[26.6px] h-[4px] pointer-events-none relative bg-[#ddd] z-[1] origin-[5px_0] rounded-[1px] my-[3.65px] "></i>
				</div>

				<div className="logo">Logo</div>
				<div className="search"></div>
			</div>
			<div className=" flex end gap-6">
				<div className="quick-menu">
					<Link href="/anime">Random</Link>
				</div>

				<div className="account">Login</div>
			</div>
		</nav>
	);
}
