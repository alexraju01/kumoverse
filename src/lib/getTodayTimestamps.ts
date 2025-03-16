export const getTodayTimestamps = () => {
	const startOfDay = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
	const endOfDay = Math.floor(new Date().setUTCHours(23, 59, 59, 999) / 1000);
	return { startOfDay, endOfDay };
};