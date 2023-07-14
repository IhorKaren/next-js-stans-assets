import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";

import image from "../../../public/Technologies/unity.png";

const Unity = () => {
  return (
    <>
      <HeroBlock title="Unity technologies" img={image} alt="Unity" />
      <ContentTextBlock />
      <Looking />
      <ContentTextBlock />
      <Contacts />
    </>
  );
};

export default Unity;
