import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";

import image from "../../../public/Technologies/ios.png";

const Ios = () => {
  return (
    <>
      <HeroBlock title="ios technologies" img={image} alt="Apple" />
      <ContentTextBlock />
      <Looking />
      <ContentTextBlock />
      <Contacts />
    </>
  );
};

export default Ios;
