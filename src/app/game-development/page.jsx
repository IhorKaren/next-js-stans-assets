import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import ServicesLinks from "../../../components/ServicesLinks/servicesLinks";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";
import Faq from "../../../components/FAQ/faq";

import image from "../../../public/Services/services-game.png";

export const metadata = {
  title: "Game development",
};

const Gamedevelopment = () => {
  return (
    <>
      <HeroBlock
        title="Game development outsourcing"
        img={image}
        alt="Woman with desctop"
      />
      <ContentTextBlock firstTitle="Header1" secondTitle="Header2" />
      <ServicesLinks />
      <Looking />
      <ContentTextBlock firstTitle="Header1" secondTitle="Header2" />
      <Contacts />
      <ProjectsSlider />
      <Faq />
    </>
  );
};

export default Gamedevelopment;
