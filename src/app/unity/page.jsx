import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import ServicesLinks from "../../../components/ServicesLinks/servicesLinks";

import image from "../../../public/Technologies/unity.png";

const Unity = () => {
  return (
    <>
      <HeroBlock title="Unity technologies" img={image} alt="Unity" />
      <ContentTextBlock />
      <ServicesLinks />
      <Looking />
      <ContentTextBlock />
      <Contacts />
    </>
  );
};

export default Unity;
