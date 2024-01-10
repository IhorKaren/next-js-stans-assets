import styles from "./faq.module.scss";

import FaqItem from "../FaqItem/faqItem";

import faqData from "../../../resources/faq";

const Faq = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.faq_title}>FAQ’s</h1>
        <div className={styles.faq_thumb}>
          <div className={styles.faq_decoration_wrap}>
            <ul className={styles.faq_titles_list}>
              {faqData.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <h4>{title}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={styles.faq_list}>
            {faqData.map(({ id, title, text }) => {
              return <FaqItem key={id} title={title} text={text} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
