import pool from "@/lib/db";
import { Anime } from "@/types/anime";

export const insertRecentAnimeBatch = async (animeData: Anime[]) => {
	if (!animeData || animeData.length === 0) {
		console.warn("No anime data provided for batch insert.");
		return [];
	}

	const client = await pool.connect();

	try {
		// Constructing query dynamically with parameterized placeholders
		const query = `
        INSERT INTO recent_anime 
        (romaji_title, english_title, airing_at, episode, cover_image_medium, cover_image_large, episodes, popularity)
        SELECT * FROM UNNEST (
            $1::text[], $2::text[], $3::timestamp[], $4::int[], 
            $5::text[], $6::text[], $7::int[], $8::int[]
        )
        ON CONFLICT (romaji_title, episode) DO NOTHING
        RETURNING *;
    `;

		const values = [
			animeData.map((a) => a.title.romaji),
			animeData.map((a) => a.title.english || null),
			animeData.map((a) =>
				a.nextAiringEpisode?.airingAt ? new Date(a.nextAiringEpisode.airingAt * 1000) : null
			),
			animeData.map((a) => a.nextAiringEpisode?.episode || null),
			animeData.map((a) => a.coverImage.medium),
			animeData.map((a) => a.coverImage.large),
			animeData.map((a) => a.episodes || null),
			animeData.map((a) => a.popularity || 0),
		];

		await client.query("BEGIN");
		const res = await client.query(query, values);
		await client.query("COMMIT");

		console.log(`✅ Inserted ${res.rowCount} new anime records.`);

		return res.rows; // Return inserted rows
	} catch (err) {
		console.error("❌ Error inserting anime batch:", err);
		throw new Error("Database insertion failed.");
	} finally {
		client.release();
	}
};
