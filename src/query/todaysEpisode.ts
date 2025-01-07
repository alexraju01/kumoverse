export const todaysEpisode = `
    query {
      Page(page: 1, perPage: 42) {
        media(type: ANIME, status: RELEASING, sort: TRENDING_DESC, isAdult: false, countryOfOrigin: "JP", format:TV) {
          title {
            romaji
            english
          }
          nextAiringEpisode {
            airingAt
            episode
          }
          coverImage {
            medium
            large
          }
          episodes
        }
      }
    }
  `;
