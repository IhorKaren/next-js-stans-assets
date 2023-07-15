import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";

import image from "../../../../public/Products/stickman.png";

const Stickman = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="Stickman Trials"
        text="It is an incredible bike simulator with realistic physics 
        that offers racing mountain bikes, BMX, motorcycles, 
        pit bikes, mopeds, and other two-wheeled rides. In addition, 
        it provides extreme driving and freerides options, combining 
        downhill and stunt rides on amazing detailed vehicles."
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

export default Stickman;
