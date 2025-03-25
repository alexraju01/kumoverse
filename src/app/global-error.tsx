// app/global-error.tsx
"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
	console.error("Global error caught:", error);

	return (
		<html>
			<body>
				<h2>Something went terribly wrong.</h2>
				<p>{error.message}</p>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
