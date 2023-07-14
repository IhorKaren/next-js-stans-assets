import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";

import image from "../../../public/Services/services-mobile.png";

const Mobile = () => {
  return (
    <>
      <HeroBlock
        title="Mobile Application Development"
        img={image}
        alt="Woman with phone"
      />
      <ContentTextBlock />
      <Looking />
      <ContentTextBlock />
      <Contacts />
    </>
  );
};

export default Mobile;
