import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";

import image from "../../../public/Services/services-3d.png";

const About = () => {
  return (
    <>
      <HeroBlock
        title="We are an outsourcing team focused on Games, VR, 3D, SDK, and Unity packages."
        route="About Us"
        img={image}
        alt="Man with tablet"
      />
      <Looking />
      <Contacts />
    </>
  );
};

export default About;
