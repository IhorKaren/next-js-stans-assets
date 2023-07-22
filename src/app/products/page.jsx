import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import PluginsList from "../../../components/PluginsList/pluginsList";

import image from "../../../public/products.png";

export const metadata = {
  title: "Products",
};

const Products = () => {
  return (
    <>
      <HeroBlock
        title="Stan assets products"
        route="Products"
        img={image}
        alt="VR helmet and smartphone"
      />
      <PluginsList />
      <Looking />
      <Contacts />
    </>
  );
};

export default Products;
