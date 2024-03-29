import HeroBlock from "../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../components/Looking/looking";
import Contacts from "../../components/Contacts/contacts";
import ServicesLinks from "../../components/ServicesLinks/servicesLinks";
import ProjectsSlider from "../../components/ProjectsSlider/projectsSlider";
import Faq from "../../components/FAQ/faq";

import image from "../../../public/Technologies/android.png";

export const metadata = {
  title: "Android",
};

const Android = () => {
  return (
    <>
      <HeroBlock title="Android technologies" route="Android" img={image} alt="Apple" />
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

export default Android;
