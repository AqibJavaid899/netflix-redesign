import { Movie } from "../types/typings";

type Props = {
  netflixOriginals: Movie[];
};

const Banner = ({ netflixOriginals }: Props) => {
  console.log("Data is : ", netflixOriginals);

  return <div>Banner</div>;
};

export default Banner;
