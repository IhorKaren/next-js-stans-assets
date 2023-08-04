import styles from "./contacts.module.scss";
import Form from "../Form/form";
import ContactsLinks from "../ContactsLinks/contactsLinks";

const Contacts = ({ children }) => {
  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.contacts_title}>CONTACTS</h3>
        <p className={styles.contacts_text}>
          We are open for dialog and you are welcome to share your opinions or
          thoughts with us
        </p>
        <span className={styles.contacts_text_wrap}>
          Hit us up any time through email with any idea and help us turn your
          great ideas into brilliant projects
        </span>
        <div className={styles.contacts_thumb}>
          <ContactsLinks />
          <div className={styles.form_thumb}>
            <div className={styles.decoration}></div>
            <div className={styles.decoration}></div>
            <div className={styles.decoration}></div>
            <Form btnText="SEND REQUEST">{children}</Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
