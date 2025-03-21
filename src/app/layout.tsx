// export const dynamic = "force-dynamic"; // ⬅️ Forces real-time fetch, disables caching

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";
// import Footer from "@/components/Footer/Footer";

const nunito = Nunito({
	subsets: ["latin"], // Choose subsets based on your needs
	weight: ["400", "600", "700"], // Choose font weights needed
});

const BebasNeue = localFont({
	src: "./fonts/BebasNeueVF.ttf", // Choose subsets based on your needs
	variable: "--font-bebas-neue",
	weight: "400 700", // Choose font weights needed
});

export const metadata: Metadata = {
	title: "Home | Kumoverse | Watch Free Anime",
	description: "Kumoverse is an Aniwave clone and is created for educational purpose website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='text-base'>
			<body
				className={`${nunito.className} ${BebasNeue.variable}  antialiased bg-primary   text-textPrimary`}>
				<header className='bg-navbarBackground mt-0 fixed w-full z-[50] transition-background duration-200 mb-[10px]'>
					<Navbar />
				</header>
				<main className=' mx-auto pt-[60px] xl:pt-[75px]'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
