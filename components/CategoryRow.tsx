import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import MovieThumbnail from "./MovieThumbnail";
import { Movie } from "../types/typings";

interface Props {
  title: string;
  movies: Movie[];
}

const CategoryRow = ({ title, movies }: Props) => {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const rowRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (scrollDirection: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        scrollDirection === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="space-y-1 md:space-y-2 h-40">
      <h2 className="w-56 text-md md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200 cursor-pointer">
        {title}
      </h2>

      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`chevronButton left-2 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
        />

        {/* Thumbnails */}
        <div
          ref={rowRef}
          className="flex items-center scrollbar-hide space-x-1 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <MovieThumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className="chevronButton right-2 group-hover:opacity-100"
        />
      </div>
    </main>
  );
};

export default CategoryRow;
