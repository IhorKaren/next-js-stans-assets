import HeroBlock from "../../components/HeroBlock/heroBlock";
import Form from "../../components/Form/form";
import ContactsLinks from "../../components/ContactsLinks/contactsLinks";
import Looking from "../../components/Looking/looking";
import ProjectsSlider from "../../components/ProjectsSlider/projectsSlider";

import styles from "./contactsMobile.module.scss";

export const metadata = {
  title: "Contact us",
};

const ContactsPage = () => {
  return (
    <>
      <HeroBlock
        title="Contact us"
        lastRoute="About us"
        text="We are open for dialog and you are welcome to share your 
      opinions or thoughts with us"
      >
        <Form
          btnText="SEND REQUEST"
          text="Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects"
        />

        <div className={styles.mobile_thumb}>
          <ContactsLinks columns />
        </div>
      </HeroBlock>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default ContactsPage;
