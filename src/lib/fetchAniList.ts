// type Media = {
// 	id: number;
// 	title: {
// 		romaji: string;
// 		english: string | null;
// 		native: string | null;
// 	};
// 	airingSchedule: {
// 		edges: {
// 			node: {
// 				airingAt: number;
// 				episode: number;
// 			};
// 		}[];
// 	};
// 	coverImage: {
// 		large: string;
// 	};
// };

// const query = `
//   query {
//       Page(page: 1, perPage: 42) {
//         media(type: ANIME, status: RELEASING, sort: TRENDING_DESC, isAdult: false, countryOfOrigin: "JP", format:TV) {
//           title {
//             romaji
//             english
//           }
//           nextAiringEpisode {
//             airingAt
//             episode
//           }
//           coverImage {
//             medium
//             large
//           }
//           episodes
//         }
//       }
//     }
//   `;
// const ANILIST_API_URL = "https://graphql.anilist.co";
// export async function fetchTodayEpisodes(): Promise<Media[]> {
// 	// const now = Math.floor(Date.now() / 1000);
// 	// const startOfDay = new Date().setHours(0, 0, 0, 0) / 1000;
// 	// const endOfDay = new Date().setHours(23, 59, 59, 999) / 1000;

// 	// const variables = {
// 	// 	startDate: startOfDay,
// 	// 	endDate: endOfDay,
// 	// };

// 	const response = await fetch(ANILIST_API_URL, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ query }),
// 	});

// 	if (!response.ok) {
// 		throw new Error("Failed to fetch AniList data");
// 	}

// 	const data: ApiResponse = await response.json();

// 	return data.data.Page.media;
// }
