import styles from "./productTable.module.scss";

const ProductTable = ({ data }) => {
  return (
    <section className={styles.container}>
      <table className={styles.table} cellPadding="0" cellSpacing="0">
        <thead className={styles.table_head}>
          <tr>
            <th className={styles.table_header}>CHALLENGE</th>
            <th className={styles.table_header}>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className={styles.table_row}>
                <td className={styles.tableCell}>{row.column1}</td>
                <td className={styles.tableCell}>{row.column2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;
