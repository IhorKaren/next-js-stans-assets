import HeroBlock from "../../../components/HeroBlock/heroBlock";
import ContentTextBlock from "../../../components/ContentTextBlock/contentTextBlock";
import VacanciesList from "../../../components/VacanciesList/vacanciesList";

import vacations from "../../../resources/vacations";

import image from "../../../public/join.png";

import text from "../../../resources/joinToUs";

const Join = () => {
  return (
    <>
      <HeroBlock title="Join the team" img={image} alt="Woman and man" />
      <ContentTextBlock
        firstTextBlock={text.first}
        secondTextBlock={text.second}
      />
      <VacanciesList data={vacations} />
    </>
  );
};

export default Join;
