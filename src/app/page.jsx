import Head from "next/head";
import Hero from "../../components/Hero/hero";
import Technologies from "../../components/Technologies/technologies";
import Services from "../../components/Services/services";
import Looking from "../../components/Looking/looking";
import Achievements from "../../components/Achievements/achievements";
import Partners from "../../components/Partners/partners";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Technologies />
      <Services />
      <Looking />
      <Achievements />
      <Partners />
    </>
  );
};

export default Home;
