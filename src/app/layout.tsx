import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
	subsets: ["latin"], // Choose subsets based on your needs
	weight: ["400", "600", "700"], // Choose font weights needed
});
export const metadata: Metadata = {
	title: "Home | AniWave | Watch Free Anime,  Online Anime Streaming - Aniwave",
	description:
		"Aniwave clone is educational purpose website. Its a online anime streaming at aniwave with DUB, SUB in HD.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='text-base'>
			<body className={`${nunito.className}  antialiased bg-primary   text-textPrimary`}>
				<header className='bg-navbarBackground mt-0 fixed w-full z-[50] transition-background duration-200 mb-[10px]'>
					<Navbar />
				</header>
				<main className='container mx-auto pt-[60px] xl:pt-[75px] px-4'>{children}</main>
			</body>
		</html>
	);
}
