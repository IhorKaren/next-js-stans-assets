import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import PluginsList from "../../../components/PluginsList/pluginsList";

import image from "../../../public/products.png";

const Products = () => {
  return (
    <>
      <HeroBlock
        title="Stan assets products"
        img={image}
        alt="Woman with phone"
      />
      <PluginsList />
      <Looking />
      <Contacts />
    </>
  );
};

export default Products;
