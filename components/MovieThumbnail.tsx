import React from "react";
import { Movie } from "../types/typings";
import Image from "next/image";
import { THUMBNAIL_BASE_URL } from "../constants/movie";

interface Props {
  movie: Movie;
}

const MovieThumbnail = ({ movie }: Props) => {
  return (
    <main className="relative h-28 min-w-[180px] md:min-w-[260px] md:h-36 cursor-pointer transition duration-300 ease-out md:hover:scale-105">
      <Image
        alt="thumbnail"
        src={`${THUMBNAIL_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm md:rounded object-cover"
        layout="fill"
      />
    </main>
  );
};

export default MovieThumbnail;
