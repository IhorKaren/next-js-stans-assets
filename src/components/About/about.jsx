import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.scss";

import image1 from "../../../public/about-section.png";
import image2 from "../../../public/products.png";

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul>
          <li className={styles.content_list_item}>
            <div>
              <Image src={image1} alt="Man with PC" />
            </div>
            <div className={styles.content_list_thumb}>
              <p className={styles.content_list_text}>
                Stan’s Assets were <strong>founded in 2013</strong> with the
                story of Stan, who worked at night after his main job and
                developed the <strong>first Unity packages</strong>. Later other
                developers who have shared Stan’s passion joined the company and
                became our co-founders.
                <br />
                <br /> Hundreds of thousands of developers are using them in
                their development. That’s how we’ve understood we can really
                save developer’s time and help them become more
                <strong> effective</strong> at their job.
              </p>
            </div>
          </li>
          <li className={styles.content_list_item}>
            <div>
              <Image src={image2} alt="Robot arm and smartphone" />
            </div>
            <div className={styles.content_list_thumb}>
              <div className={styles.content_list_text_wrap}>
                <p className={styles.content_list_text}>
                  Thank for our plugins we became recognizible and started
                  working with top worlknown companies like
                  <strong> Moon Studios, Roomful and others</strong>.
                  <br />
                  <br />
                  Now our team has more than
                  <strong> 15 developers</strong> who create
                  <strong> games, VR spaces, mobile applications</strong> for
                  our clients.
                </p>
                <Link href="/join" className={styles.link}>
                  If you share our values we’d love to see you as a part of our
                  team!
                </Link>
              </div>
              <div>
                <h2 className={styles.content_list_title}>Our mission</h2>
                <p className={styles.content_list_text}>
                  To create slick code that will be understandable to all
                  developers who may work on a project after us and to make the
                  developer’s life easier with our plugins.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
