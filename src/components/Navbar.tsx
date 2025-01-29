import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Kumoverse.png";

export default function Navbar() {
	return (
		<nav className='bg-navbarBackground text-textSecondar h-[55px] flex justify-between max-w-[1800px] mx-auto items-center text-[12px] sm:px-[10px] md:px-[10px] lg:px-[10px] lg:text-base 2xl:h-[67.5px]'>
			<div className='start h-full flex items-center'>
				<div className='menu'></div>
				<div className='menu-toggler inline-block text-[1.5rem] cursor-pointer w-[26.6px] h-[26.6px] p-[10px] box-content mr-[10px]'>
					<i className='navar-toggle-span'></i>
					<i className='navar-toggle-span'></i>
					<i className='navar-toggle-span'></i>
				</div>
				<div className='logo  min-w-[91px] min-h-[27px]  max-w-[143.3px] max-h-[43.9px] w-full'>
					<Link href='/'>
						<Image src={logo} alt='Logo' className='object-contain h-full w-full' />
					</Link>
				</div>

				<div className='search'></div>
			</div>
			<div className=' flex end gap-5 mr-2'>
				<div className='quick-menu'>
					<Link href='/anime'>Random</Link>
				</div>

				<div className='account'>Login</div>
			</div>
		</nav>
	);
}
