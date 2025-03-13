export const airingTodayAnime = `
    {
      Page(page: 1) {
        media(
          type: ANIME
          status: RELEASING
          sort: POPULARITY_DESC
          isAdult: false
          countryOfOrigin: "JP"
          format_in: [TV, ONA]
        ) {
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
          popularity
        }
      }
    }
  `;
