import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="text-base">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary  text-textPrimary`}
			>
				<header className="bg-navbarBackground mt-0 fixed w-full z-[50] transition-background duration-200 mb-[10px]">
					<Navbar />
				</header>
				<main className="pt-[60px] xl:pt-[75px]">{children}</main>
			</body>
		</html>
	);
}
