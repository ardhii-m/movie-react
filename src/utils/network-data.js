import API_ENDPOINT from "./api-endpoint";

async function getNowPlaying() {
  const response = await fetch(API_ENDPOINT.NOW_PLAYING);
  const responseJson = await response.json();
  return responseJson.results;
}

async function getUpcomingMovies() {
  const response = await fetch(API_ENDPOINT.UPCOMING);
  const responseJson = await response.json();
  return responseJson.results;
}

async function getMovieDetail(id) {
  const response = await fetch(API_ENDPOINT.DETAIL(id));
  return response.json();
}

async function getMovieCredits(id) {
  const response = await fetch(API_ENDPOINT.CREDITS(id));
  return response.json();
}

export { getNowPlaying, getUpcomingMovies, getMovieDetail, getMovieCredits };