import { Anime } from "./anime";

export interface ApiResponse {
	data: {
		Page: {
			media: Anime[];
		};
	};
}
