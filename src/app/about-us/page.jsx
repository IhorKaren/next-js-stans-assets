import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import AboutSection from "../../../components/About/about";

import image from "../../../public/Services/services-3d.png";

const About = () => {
  return (
    <>
      <HeroBlock
        title="We are an outsourcing team focused on Games, VR, 3D, SDK, and Unity packages."
        route="About Us"
        routeName='About Us'
        img={image}
        alt="Man with tablet"
      />
      <AboutSection />
      <Looking />
      <Contacts />
    </>
  );
};

export default About;
