import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";

import image from "../../../../public/Products/signal.png";

const Signal = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="One signal SDK"
        text="OneSignal is the easiest and most popular way to send push notifications, 
        in-app messages/pop-ups, emails, and SMS messages to your players."
        android
        ios
        unity
      />
      <section></section>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default Signal;
