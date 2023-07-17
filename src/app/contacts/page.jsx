import HeroBlock from "../../../components/HeroBlock/heroBlock";
import Form from "../../../components/Form/form";
import Looking from "../../../components/Looking/looking";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";

const ContactsPage = () => {
  return (
    <>
      <HeroBlock
        title="Contact Us"
        lastRoute="About Us"
        text="We are open for dialog and you are welcome to share your 
      opinions or thoughts with us"
      >
        <Form
          btnText="SEND REQUEST"
          text="Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects"
        />
      </HeroBlock>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default ContactsPage;
