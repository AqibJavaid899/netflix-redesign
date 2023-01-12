import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import CategoryRow from "../components/CategoryRow";
import requests from "../utils/requests";
import { Movie } from "../types/typings";

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
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Netflix Redesign</title>
        <link rel="icon" href="/netflixIcon.ico" />
      </Head>

      <Header />

      <main className="relative pl-6 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />

        <section className="md:space-y-24">
          <CategoryRow title="Trending Now" movies={trendingNow} />
          <CategoryRow title="Top Rated" movies={topRated} />
          <CategoryRow title="Action Thrillers" movies={actionMovies} />
          <CategoryRow title="Comedies" movies={comedyMovies} />
          <CategoryRow title="Scary Movies" movies={horrorMovies} />
          <CategoryRow title="Romance Movies" movies={romanceMovies} />
          <CategoryRow title="Documentaries" movies={documentaries} />
        </section>
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
