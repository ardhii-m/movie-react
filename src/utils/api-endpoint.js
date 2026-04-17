import CONFIG from "./config";

const API_ENDPOINT = {
  TRENDING: `${CONFIG.BASE_URL}trending/movie/week?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  NOW_PLAYING: (page = 1) => `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  UPCOMING: (page = 1) => `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  POPULAR: (page = 1) => `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  CREDITS: (id) => `${CONFIG.BASE_URL}movie/${id}/credits?api_key=${CONFIG.KEY}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${encodeURIComponent(query)}`,
  REVIEWS: (id) => `${CONFIG.BASE_URL}movie/${id}/reviews?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  SIMILAR: (id) => `${CONFIG.BASE_URL}movie/${id}/similar?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
};

export default API_ENDPOINT;