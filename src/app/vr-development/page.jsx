import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";

import image from "../../../public/Services/services-vr.png";

const VRdevelopment = () => {
  return (
    <>
      <HeroBlock
        title="VR APP Development"
        img={image}
        alt="Woman in VR helmet"
      />
      <ContentTextBlock />
      <Looking />
      <ContentTextBlock />
      <Contacts />
    </>
  );
};

export default VRdevelopment;
