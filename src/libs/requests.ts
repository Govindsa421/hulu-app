export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?language=en-US`,
  },
  fetchTopRateds: {
    title: 'Top Rated',
    url: `/movie/top_rated?language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?with_genres=28`,
  },
  fetchComdeyMovies: {
    title: 'Comdey',
    url: `/discover/movie?with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?with_genres=37`,
  },
  fetchAnimations: {
    title: 'Animation',
    url: `/discover/movie?with_genres=16`,
  },
  fetchTv: {
    title: 'Tv Movie',
    url: `/discover/movie?with_genres=10770`,
  },
}
