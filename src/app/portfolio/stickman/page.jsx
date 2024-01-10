import ProductHero from "../../../components/ProductHero/productHero";
import Looking from "../../../components/Looking/looking";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";
import ProductTable from "../../../components/ProductTable/productTable";

import tableData from "../../../../resources/tableData";

import image from "../../../../public/Products/stickman.webp";

export const metadata = {
  title: "Stickman",
};

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
      <ProductTable data={tableData.stickman}/>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default Stickman;
