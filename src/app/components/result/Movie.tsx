"use client";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movie = ({ movies }) => {
  console.log(movies, "movies");

  const router = useRouter();

  const handleCardClick = (movie) => {
    const type = movie.media_type || "movie"; // Use media_type if available; otherwise, default to 'movie'
    router.push(`/${type}/${movie.id}`);
  };

  return (
    <div className="lg:px-16 px-6 lg:py-8 py-4 text-white">
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {movies?.length > 0 ? (
          movies.map((movie: any) => {
            return (
              <div key={movie.id} onClick={() => handleCardClick(movie)}>
                <div className=" overflow-hidden">
                  <Image
                    className="w-full h-60  object-cover rounded-md hover:brightness-50 cursor-pointer duration-300"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={"no image"}
                    priority
                    width={1080}
                    height={1920}
                  />
                </div>
                <div className="pt-2 space-y-1">
                  <p className=" max-w-96 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {movie.overview}
                  </p>
                  <h1 className=" font-bold text-xl text-slate-400 max-w-60 whitespace-nowrap overflow-hidden text-ellipsis">
                    {movie.title}
                  </h1>
                  <div className="flex items-center text-slate-500 gap-2">
                    <p>{movie.release_date}</p>
                    {movie.vote_count <= 200 ? (
                      <HandThumbDownIcon className="h-5 w-5" />
                    ) : (
                      <HandThumbUpIcon className="h-5 w-5" />
                    )}
                    <p>{movie.vote_count}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
