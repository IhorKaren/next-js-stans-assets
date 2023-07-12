import styles from "./services.module.scss";

const Services = () => {
  return (
    <section className={styles.services_section}>
      <h3 className={styles.title}>SERVICES</h3>
      <ul className={styles.content_list}>
        <li className={styles.content_list_item}>
          <div>
            <h4 className={styles.content_list_title}>GAME DEVELOPMENT</h4>
            <p className={styles.content_list_text}>
              Game development consists of several stages, including concept,
              programming, game graphics, and sound engineering. Our game
              development studio offers a complete game development cycle, from
              the game concept creation to placement on the app markets.
              Creating games requires the coordinated work of our Unity
              developers team. Combining 6+ years of experience and fresh ideas,
              our software developers company offers a full-service game
              development. We fully provide our partners with all the necessary
              resources for creating top-notch games. Stan’s Assets professional
              expertise allows guaranteeing the necessary support at all stages
              of project creation and launch.
            </p>
          </div>
        </li>
        <li className={styles.content_list_item}>
          <div>
            <h4 className={styles.content_list_title}>SDK DEVELOPMENT</h4>
            <p className={styles.content_list_text}>
              SDK solves a big task: it ensures the data exchange between an app
              and a third-party infrastructure, implementing a full-fledged
              process. It’s an interface for working with the system and a
              ready-made set of tools for implementing certain business logic.
              We build SDKs in a way that doesn’t require you to dive into the
              code and ensure that your tasks will be solved. We are here to
              help and boost the work with Unity and editor tools for
              developers, and full SDK support on the platform.We offer a
              complete game development cycle, including concept creation,
              programming, graphics, and sound engineering. Our experienced team
              of Unity developers combines expertise and fresh ideas to provide
              full-service game development.
            </p>
          </div>
        </li>
        <li className={styles.content_list_item}>
          <div>
            <h4 className={styles.content_list_title}>3D MODELING SERVICES</h4>
            <p className={styles.content_list_text}>
              3D modeling is used almost everywhere, so it’s one of the most
              demanded IT outsourcing services. Using advanced technologies, our
              engineers create projects with great attention to detail and
              high-resolution textures. It gives you the most realistic models
              that you can insert into your projects instantly. Stan’s Assets
              carries out a full cycle of work. Our team will create a drawing
              and then turn the 2D sketch into a 3D model. We elaborate on
              technical assignments and design the object of any difficulty
              level with perfect detail. With our expertise in 3D modeling and
              commitment to perfection, we ensure that every project is executed
              with utmost precision and attention to detail, delivering
              impressive results.
            </p>
          </div>
        </li>
        <li className={styles.content_list_item}>
          <div>
            <h4 className={styles.content_list_title}>VR APP DEVELOPMENT</h4>
            <p className={styles.content_list_text}>
              According to predictions, virtual reality will completely supplant
              other apps and games in the nearest future. VR development is more
              demanding and has a number of features and technical nuances
              compared to classic app development. VR development differs
              depending on the device on which the app is installed due to
              various technical characteristics of these devices. Be sure that
              our engineers consider all those specifications precisely while
              developing VR games. Our Unity developers provide a complete set
              of solutions, starting with an innovative idea, and up to creating
              VR content that will meet your expectations.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
