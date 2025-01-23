import requests from '../../libs/requests'

export async function getServerSideProps(context) {
  // console.log(context, "cc");
  const genre = context.query.genre
  // console.log(genre, "gnre");
  const request = await fetch(
    `https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`,
  ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    },
  }
}

// import { requests } from "../utils/requests";

// const API_URL = "https://api.themoviedb.org/3";
// export async function fetchMoviesByGenre(genre: string = "fetchTrending") {
//   const apiUrl = `${API_URL}${
//     requests[genre]?.url || requests.fetchTrending.url
//   }`;

//   const response = await fetch(apiUrl);

//   if (!response.ok) {
//     throw new Error("Failed to fetch data from TMDb API");
//   }

//   const data = await response.json();
//   return data.results;
// }
