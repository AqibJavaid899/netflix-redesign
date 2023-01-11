import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

import ReadMore from "./ReadMore";
import { Movie } from "../types/typings";
import { BASE_URL } from "../constants/movie";

type Props = {
  netflixOriginals: Movie[];
};

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <main className="flex flex-col space-y-2 md:space-y-4 py-16 md:py-20 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          alt="banner"
          src={`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Title and Overview */}
      <h1 className="max-w-sm md:max-w-2xl lg:max-w-6xl lg:text-6xl text-2xl font-semibold md:text-4xl">
        {movie?.title || movie?.original_title}
      </h1>
      <div className="max-w-xs text-sm text-shadow-md md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl">
        <ReadMore overview={movie?.overview} />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <InformationCircleIcon className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </button>
      </div>
    </main>
  );
};

export default Banner;
