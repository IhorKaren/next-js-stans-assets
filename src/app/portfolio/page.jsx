import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import PortfolioList from "../../../components/PortfolioList/portfolioList";

import image from "../../../public/portfolio.png";

export const metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  return (
    <>
      <HeroBlock
        title="Stan assets portfolio"
        route="Portfolio"
        img={image}
        alt="Man with tablet"
      />
      <PortfolioList />
      <Looking />
      <Contacts />
    </>
  );
};

export default Portfolio;
