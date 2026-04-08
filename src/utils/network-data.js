import API_ENDPOINT from "./api-endpoint";

async function getNowPlaying(page = 1) {
  const response = await fetch(API_ENDPOINT.NOW_PLAYING(page));
  const responseJson = await response.json();
  return { results: responseJson.results, totalPages: responseJson.total_pages };
}

async function getUpcomingMovies(page = 1) {
  const response = await fetch(API_ENDPOINT.UPCOMING(page));
  const responseJson = await response.json();
  return { results: responseJson.results, totalPages: responseJson.total_pages };
}

async function getMovieDetail(id) {
  const response = await fetch(API_ENDPOINT.DETAIL(id));
  return response.json();
}

async function getMovieCredits(id) {
  const response = await fetch(API_ENDPOINT.CREDITS(id));
  return response.json();
}

async function searchMovies(query) {
  const response = await fetch(API_ENDPOINT.SEARCH(query));
  const responseJson = await response.json();
  return responseJson.results;
}

async function getMovieReviews(id) {
  const response = await fetch(API_ENDPOINT.REVIEWS(id));
  const responseJson = await response.json();
  return responseJson.results;
}

export { getNowPlaying, getUpcomingMovies, getMovieDetail, getMovieCredits, searchMovies, getMovieReviews };