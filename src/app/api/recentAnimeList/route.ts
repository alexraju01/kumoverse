import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transformAnimeData } from "@/lib/transformAnime";

export async function POST(req: Request) {
	try {
		// Parse the request body
		const animeList = await req.json();

		// Validate animeList
		if (!animeList || !Array.isArray(animeList) || animeList.length === 0) {
			return NextResponse.json({ error: "Anime list is empty or invalid." }, { status: 400 });
		}

		console.info(`Received ${animeList.length} anime items.`);

		// Transform data
		const animeListTransformed = transformAnimeData(animeList);

		// Insert using Prisma
		const insertedAnime = await prisma.recentAnimeList.createMany({
			data: animeListTransformed,
			skipDuplicates: true, // Avoid inserting duplicates
		});

		console.log(animeListTransformed);

		console.info(`Inserted ${insertedAnime.count} anime airing today.`);

		return NextResponse.json(
			{ message: `Inserted ${insertedAnime.count} anime airing today.` },
			{ status: 201 }
		);
	} catch (error: unknown) {
		console.error("Error inserting recent anime batch:", error);

		if (error instanceof Error) {
			return NextResponse.json(
				{ error: "Internal Server Error", details: error.message },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ error: "Internal Server Error", details: "Unknown error occurred" },
			{ status: 500 }
		);
	}
}
