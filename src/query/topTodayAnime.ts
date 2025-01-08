export const topTodayAnime = `
query {
  Page(page: 1, perPage: 10) {
    media(type: ANIME, status: RELEASING, sort: POPULARITY_DESC, isAdult: false, countryOfOrigin: "JP", format: TV) {
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
