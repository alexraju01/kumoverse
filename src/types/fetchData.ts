import { Anime } from "./anime";

interface GraphQLResponse {
	data: {
		Page: {
			media: Anime[];
		};
	};
}

type RestResponse = Anime[]; // REST API might return an array directly

export type ApiResponse = GraphQLResponse | RestResponse;
