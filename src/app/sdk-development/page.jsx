import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import ServicesLinks from "../../../components/ServicesLinks/servicesLinks";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";
import Faq from "../../../components/FAQ/faq";

import image from "../../../public/Services/services-sdk.png";

const Sdk = () => {
  return (
    <>
      <HeroBlock title="SDK development" img={image} alt="Robot" />
      <ContentTextBlock />
      <ServicesLinks />
      <Looking />
      <ContentTextBlock />
      <Contacts />
      <ProjectsSlider />
      <Faq />
    </>
  );
};

export default Sdk;
