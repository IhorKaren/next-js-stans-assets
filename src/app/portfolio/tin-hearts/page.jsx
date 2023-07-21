import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";
import ProductTable from "../../../../components/ProductTable/productTable";

import tableData from "../../../../resources/tableData";

import image from "../../../../public/Products/tinhearts.webp";

const TinHearts = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="Tin hearts"
        text="Behind every brilliant invention, hides an incredible story. 
        Guide a troop of tin soldiers through a magical toy-filled world, 
        in this immersive puzzle adventure game from members of the team 
        that brought you Fable."
        unity
        playstation
        nintendo
        xbox
        steam
      />
      <ProductTable data={tableData.tin} />
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default TinHearts;
