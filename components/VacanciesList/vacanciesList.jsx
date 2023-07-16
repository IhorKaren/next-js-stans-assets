import VacanciesItem from "../VacanciesItem/vacanciesItem";

import styles from "./vacanciesList.module.scss";

const VacanciesList = ({ data }) => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Current openings</h2>
        <ul className={styles.list}>
          {data.map(
            ({ id, title, requirements, preferences, responsibilities }) => {
              return (
                <VacanciesItem
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

export default VacanciesList;
