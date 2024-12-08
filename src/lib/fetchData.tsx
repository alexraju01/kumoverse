// const url = "https://api.jikan.moe";

// export default async function fetchData(version: string, endpoint: string) {
// 	const response = await fetch(`${url}/${version}/${endpoint}`, {
// 		next: { revalidate: 3600 }, // Correct placement of the `next` option
// 	});

// 	console.log(`Fetching: ${url}/${version}/${endpoint}`);

// 	if (!response.ok) {
// 		throw new Error(
// 			`Failed to fetch data: ${response.status} ${response.statusText}`
// 		);
// 	}

// 	const data = await response.json();
// 	return data;
// }
