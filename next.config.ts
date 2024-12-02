import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.myanimelist.net",
				port: "",
				pathname: "/images/anime/**", // Add leading slash here
			},
			{
				protocol: "https",
				hostname: "s4.anilist.co",
				port: "",
				pathname: "/file/anilistcdn/media/anime/**",
			},
		],
	},
};

export default nextConfig;
