import styles from "./form.module.scss";

const Form = ({ title, text, btnText, optionalPortfolio, optionalFile }) => {
  return (
    <div className={styles.form_thumb}>
      <form name="contactUs_form" autoComplete="off" className={styles.form}>
        <div>
          {title && <strong className={styles.form_title}>{title}</strong>}
          {text && <span className={styles.form_text}>{text}</span>}
        </div>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={styles.form_item}
          />
        </label>

        <label htmlFor="email">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={styles.form_item}
          />
        </label>
        {optionalPortfolio && (
          <label htmlFor="portfolio">
            <input
              type="text"
              id="portfolio"
              placeholder="Portfolio link"
              className={styles.form_item}
            />
          </label>
        )}
        {optionalFile && (
          <label htmlFor="file" className={styles.form_label}>
            <input type="file" id="file" className={styles.form_item} />
            <span className={styles.input_file_btn}>Upload CV</span>
          </label>
        )}
        <label htmlFor="message">
          <textarea
            rows="4"
            id="message"
            placeholder="Message"
            className={styles.form_item}
          />
        </label>

        <button type="submit" className={styles.button}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
