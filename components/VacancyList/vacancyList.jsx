import VacancyItem from "../VacancyItem/vacancyItem";

import styles from "./vacancyList.module.scss";

const VacancyList = ({ data }) => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Current openings</h2>
        <ul className={styles.list}>
          {data.map(
            ({ id, title, requirements, preferences, responsibilities }) => {
              return (
                <VacancyItem
                  key={id}
                  title={title}
                  requirements={requirements}
                  preferences={preferences}
                  responsibilities={responsibilities}
                />
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default VacancyList;
