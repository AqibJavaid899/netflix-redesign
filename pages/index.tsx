import Head from "next/head";

import Header from "../components/Header";
import requests from "../utils/requests";
import { Movie } from "../types/typings";
import Banner from "../components/Banner";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix Redesign</title>
        <link rel="icon" href="/netflixIcon.ico" />
      </Head>

      <Header />

      <main className="relative pl-6 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchTrending)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchTopRated)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchActionMovies)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchComedyMovies)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchHorrorMovies)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchRomanceMovies)
      .then((res) => res.json())
      .then((data) => data.results),
    fetch(requests.fetchDocumentaries)
      .then((res) => res.json())
      .then((data) => data.results),
  ]);

  return {
    props: {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    },
  };
};
