import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { Anime } from "@/types/anime";

export async function POST(req: NextRequest) {
	try {
		const animeData: Anime[] = await req.json();

		if (!animeData || animeData.length === 0) {
			return NextResponse.json({ error: "No anime data provided." }, { status: 400 });
		}

		const client = await pool.connect();

		try {
			const query = `
            INSERT INTO "RecentAnimeList" 
            ("romajiTitle", "englishTitle", "airingAt", "episode", "coverLarge", "coverMedium", "episodes", "popularity")
            SELECT * FROM UNNEST (
                $1::text[], $2::text[], $3::int[], $4::int[], 
                $5::text[], $6::text[], $7::int[], $8::int[]
            )
            ON CONFLICT ("romajiTitle", "episode") 
            DO UPDATE SET 
                "airingAt" = EXCLUDED."airingAt",
                "coverLarge" = EXCLUDED."coverLarge",
                "coverMedium" = EXCLUDED."coverMedium",
                "episodes" = EXCLUDED."episodes",
                "popularity" = EXCLUDED."popularity"
            RETURNING *;
            `;

			const values = [
				animeData.map((a) => a.title.romaji),
				animeData.map((a) => a.title.english || null),
				animeData.map((a) => a.nextAiringEpisode?.airingAt || null),
				animeData.map((a) => a.nextAiringEpisode?.episode || null),
				animeData.map((a) => a.coverImage?.large),
				animeData.map((a) => a.coverImage?.medium),
				animeData.map((a) => a.episodes || null),
				animeData.map((a) => a.popularity || 0),
			];

			await client.query("BEGIN");
			const res = await client.query(query, values);
			await client.query("COMMIT");

			return NextResponse.json({ success: true, data: res.rows }, { status: 201 });
		} catch (err) {
			await client.query("ROLLBACK");
			console.error("❌ Database insertion error:", err);
			return NextResponse.json({ error: "Database insertion failed." }, { status: 500 });
		} finally {
			client.release();
		}
	} catch (error) {
		console.error("❌ Error processing request:", error);
		return NextResponse.json({ error: "Invalid request data." }, { status: 400 });
	}
}
