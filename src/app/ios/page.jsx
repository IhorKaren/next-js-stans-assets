import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import ServicesLinks from "../../../components/ServicesLinks/servicesLinks";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";
import Faq from "../../../components/FAQ/faq";

import image from "../../../public/Technologies/ios.png";

const Ios = () => {
  return (
    <>
      <HeroBlock title="IOS technologies" route="IOS" img={image} alt="Apple" />
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

export default Ios;
