export const query = `
    query ($page: Int, $start: Int,  $end: Int) {
        Page(page: $page, perPage: 50) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
            }
            airingSchedules(airingAt_greater: $start, airingAt_lesser: $end, sort: TIME) {
            airingAt
            media {
                title {
                romaji
                english
            }
            coverImage {
                large
            }
            siteUrl
            format
            episodes
            }
        }
    }
}   
  `;
