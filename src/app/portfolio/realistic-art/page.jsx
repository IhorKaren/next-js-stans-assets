import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";

import image from "../../../../public/Products/art.png";

const RealisticArt = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="Realistic Art"
        text="Stan’s Assets offers a range of 3D assets and tools that enable 
        users to create realistic and high-quality 3D art for their projects. 
        Their assets include textures, models, animations, and shaders, 
        which can be easily integrated into popular game engines like Unity 
        and Unreal Engine."
        unity
      />
      <section></section>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default RealisticArt;
