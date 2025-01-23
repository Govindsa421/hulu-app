import requests from '../../libs/requests'

export async function getServerSideProps(context) {
  // console.log(context, "cc");
  const genre = context.query.genre
  // console.log(genre, "gnre");
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_SLUG_URL}${requests[genre]?.url || requests.fetchTrending.url}`,
  ).then((res) => res.json())

  return { props: { results: request.results } }
}
