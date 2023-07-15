import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";

import image from "../../../../public/Products/ori.png";

const Ori = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="Ori and wotw"
        text="Ori and the Will of the Wisps is a platform-adventure Metroidvania video 
        game developed by Moon Studios and published by Xbox Game Studios. 
        It has an emphasis on exploration, collecting items and upgrades, and backtracking to previously
        inaccessible areas."
        unity
        nintendo
        xbox
        steam
      />
      <section></section>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default Ori;
