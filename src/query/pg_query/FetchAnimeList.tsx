import pool from "@/lib/db";

export const FetchAnimeList = async () => {
	const client = await pool.connect();

	try {
		const query = `SELECT * FROM recent_anime`;

		await client.query("BEGIN");
		const res = await client.query(query);
		await client.query("COMMIT");

		console.log(`✅ Successfully fetched from recent_anime table`);

		return res.rows; // Return inserted/updated rows
	} catch (err) {
		await client.query("ROLLBACK");
		console.error("❌ Error inserting anime batch:", err);
		throw new Error("Failed to fetch from recent_anime table");
	} finally {
		client.release();
	}
};
