const KEY = '0de37458c6ffde6aa6a16af814be4efa';
const BASE_URL = 'https://api.themoviedb.org/3/';
const DEFAULT_LANGUAGE = 'en-us';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
// import API_ENDPOINT from "./api-endpoint";

const NOW_PLAYING = `${BASE_URL}movie/now_playing?api_key=${KEY}&language=${DEFAULT_LANGUAGE}&page=1`;
const UPCOMING = `${BASE_URL}movie/upcoming?api_key=${KEY}&language=${DEFAULT_LANGUAGE}&page=1`;


async function getNowPlaying() {
  const response = await fetch(NOW_PLAYING);
  const responseJson = await response.json();
  return responseJson.results;
}

async function getUpcomingMovies() {
  const response = await fetch(UPCOMING);
  const responseJson = await response.json();
  return responseJson.results;
}


export { BASE_IMAGE_URL, getNowPlaying, getUpcomingMovies };