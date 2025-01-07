// lib/queries.js
export const GET_ANIME_EPISODES = `
  query RecentReleases($page: Int = 1, $perPage: Int = 50, $countryOfOrigin: String = "JP") {
    Page(page: $page, perPage: $perPage) {
      media(
        type: ANIME,
        sort: START_DATE_DESC,
        status: RELEASING,
        countryOfOrigin: $countryOfOrigin,
        format: TV
      ) {
        id
        title {
          romaji
          english
        }
        episodes
        nextAiringEpisode {
          airingAt
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
      }
    }
  }
`;
