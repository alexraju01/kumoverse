import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transformAnimeData } from "@/lib/transformAnime";

const MAX_RECORDS = 15;

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

		// Count current records
		const currentCount = await prisma.recentAnimeList.count();

		// If we exceed the limit, delete the oldest records
		if (currentCount + animeListTransformed.length > MAX_RECORDS) {
			const recordsToDelete = currentCount + animeListTransformed.length - MAX_RECORDS;

			// Fetch the oldest records to delete
			const oldestRecords = await prisma.recentAnimeList.findMany({
				orderBy: { createdAt: "asc" }, // Assuming `createdAt` exists
				take: recordsToDelete,
				select: { id: true },
			});

			// Delete the oldest records
			await prisma.recentAnimeList.deleteMany({
				where: {
					id: { in: oldestRecords.map((record) => record.id) },
				},
			});
		}

		// Insert new records using Prisma
		const insertedAnime = await prisma.recentAnimeList.createMany({
			data: animeListTransformed,
			skipDuplicates: true, // Avoid inserting duplicates
		});

		console.info(`Inserted ${insertedAnime.count} anime airing today.`);

		return NextResponse.json(
			{
				message: `Inserted ${insertedAnime.count} anime airing today. If the insert number is not what you expect, there are duplicate records being skipped`,
			},
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
