import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import VacancyList from "../../../components/VacancyList/vacancyList";

import vacations from "../../../resources/vacations";

import image from "../../../public/join.png";

import text from "../../../resources/joinToUs";

export const metadata = {
  title: "Join us",
};

const Join = () => {
  return (
    <>
      <HeroBlock
        title="Join the team"
        lastRoute="About us"
        img={image}
        alt="Woman and man"
      />
      <ContentTextBlock
        firstTextBlock={text.first}
        secondTextBlock={text.second}
      />
      <VacancyList data={vacations} />
    </>
  );
};

export default Join;
