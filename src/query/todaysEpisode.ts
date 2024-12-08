export const todaysEpisode = `
    query {
      Page(page: 1, perPage: 12) {
        media(type: ANIME, status: RELEASING, sort: TRENDING_DESC) {
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
