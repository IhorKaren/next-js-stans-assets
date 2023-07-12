import Head from "next/head";
import Hero from "../../components/Hero/hero";
import Technologies from "../../components/Technologies/technologies";
import Services from "../../components/Services/services";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Technologies />
      <Services />
    </>
  );
};

export default Home;
