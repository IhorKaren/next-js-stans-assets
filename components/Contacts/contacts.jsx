import styles from "./contacts.module.scss";
import {
  BiMap,
  BiPhone,
  BiLogoWhatsapp,
  BiLogoSkype,
  BiEnvelope,
  BiLogoFacebookCircle,
} from "react-icons/bi";

const Contacts = () => {
  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.title}>CONTACTS</h3>
        <p className={styles.text}>
          We are open for dialog and you are welcome to share your opinions or
          thoughts with us
        </p>
        <span className={styles.text_wrap}>
          Hit us up any time through email with any idea and help us turn your
          great ideas into brilliant projects
        </span>
        <div className={styles.thumb}>
          <ul className={styles.list}>
            <li>
              <a href="" className={styles.link}>
                <BiMap size="cssSize" className={styles.icon} />
                <address className={styles.address}>
                  Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
                </address>
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                <BiPhone size="cssSize" className={styles.icon} />
                +38 (093) 345 56 76
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                <BiLogoWhatsapp size="cssSize" className={styles.icon} />
                +38 (093) 345 56 77
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                <BiLogoSkype size="cssSize" className={styles.icon} />
                Stanassets
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                <BiEnvelope size="cssSize" className={styles.icon} />
                stanAssets@gmail.com
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                <BiLogoFacebookCircle size="cssSize" className={styles.icon} />
                facebook.com/Stanassets
              </a>
            </li>
          </ul>

          <div className={styles.form_thumb}>
            <div className={styles.decoration}></div>
            <div className={styles.decoration}></div>
            <div className={styles.decoration}></div>
            <form
              name="contactUs_form"
              autoComplete="off"
              className={styles.form}
            >
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

              <label htmlFor="message">
                <textarea
                  rows="5"
                  id="message"
                  placeholder="Message"
                  className={styles.form_item}
                />
              </label>

              <button type="submit" className={styles.button}>
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
