import Head from "next/head";
import Hero from "../../components/Hero/hero";
import Technologies from "../../components/Technologies/technologies";
import Services from "../../components/Services/services";
import Looking from "../../components/Looking/looking";
import Achievements from "../../components/Achievements/achievements";
import Partners from "../../components/Partners/partners";
import Contacts from "../../components/Contacts/contacts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Technologies />
      {/* <Services /> */}
      {/* <Looking /> */}
      {/* <Achievements /> */}
      {/* <Partners /> */}
      {/* <Contacts /> */}
    </>
  );
};

export default Home;
