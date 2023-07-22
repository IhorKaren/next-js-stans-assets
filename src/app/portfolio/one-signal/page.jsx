import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";
import ProductTable from "../../../../components/ProductTable/productTable";

import tableData from "../../../../resources/tableData";

import image from "../../../../public/Products/signal.webp";

export const metadata = {
  title: "One signal",
};

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
      <ProductTable data={tableData.signal}/>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default Signal;
