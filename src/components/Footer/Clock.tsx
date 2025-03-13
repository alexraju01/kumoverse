"use client";
import { useState, useEffect } from "react";

export default function Clock() {
	const [time, setTime] = useState(new Date()); // states

	useEffect(() => {
		const updateClock = () => setTime(new Date());

		// Calculate the initial delay to sync to the next second
		const delay = 1000 - new Date().getMilliseconds();

		// Sync to the next second and start interval updates
		const timeoutId = setTimeout(() => {
			updateClock();
			const intervalId = setInterval(updateClock, 1000);

			// Cleanup the interval on unmount
			return () => clearInterval(intervalId);
		}, delay);

		// Cleanup the timeout on unmount
		return () => clearTimeout(timeoutId);
	}, []);

	return <time className='text-[#444] text-[1.5rem]'>- {time.toLocaleTimeString()}</time>;
}
