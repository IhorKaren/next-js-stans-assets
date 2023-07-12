import styles from "./looking.module.scss";

const Looking = () => {
  return (
    <div className={styles.thumb}>
      <section className={styles.container}>
        <h3 className={styles.title}>LOOKING FOR A PARTNER IN BUILDING A SOLUTION?</h3>
        <p className={styles.text}>We are ready to discuss your project requirements</p>
        <button type="button" className={styles.button}>LET’S TALK</button>
      </section>
    </div>
  );
};

export default Looking;
