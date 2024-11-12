import Image from "next/image";
import React from "react";

// Fetch data for a specific movie or TV show
async function getData(type, id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${type} details`);
  }

  return res.json();
}

const DetailPage = async ({ params }) => {
  const { type, id } = params;
  //   console.log(params, "paramzs");

  // Fetch data based on type (movie/tv) and id
  const data = await getData(type, id);
  console.log(data, "data");

  return (
    <div className="p-6 ">
      <div className="flex gap-8">
        <div className="flex">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title || data.name}
            className="rounded-md h-[92.5vh] m-2"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{data.title || data.name}</h1>
          <p>{data.overview}</p>

          <div>
            <div></div>
            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
