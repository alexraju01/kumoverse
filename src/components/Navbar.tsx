export default function Navbar() {
	return (
		<nav className="bg-navbarBackground text-textSecondar h-[55px] flex justify-between max-w-[1800px] mx-auto items-center px-[10px]">
			<div className="start bg-primary ">
				<div className="menu"></div>
				<div className="menu-toggler"></div>
				<div className="logo">Logo</div>
				<div className="search"></div>
			</div>
			<div className="end">
				<div className="quick-menu"></div>
				<div className="account">Login</div>
			</div>
		</nav>
	);
}
