import { Movie } from "../types/typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import MovieThumbnail from "./MovieThumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

const CategoryRow = ({ title, movies }: Props) => {
  return (
    <main className="space-y-1 md:space-y-2 h-40">
      <h2 className="w-56 text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200 cursor-pointer">
        {title}
      </h2>

      <div className="relative group -ml-2">
        <ChevronLeftIcon className="chevronButton left-2 group-hover:opacity-100" />

        {/* Thumbnails */}
        <div className="flex items-center space-x-1 overflow-x-scroll md:space-x-3 md:p-2">
          {movies.map((movie) => (
            <MovieThumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className="chevronButton right-2 group-hover:opacity-100" />
      </div>
    </main>
  );
};

export default CategoryRow;
