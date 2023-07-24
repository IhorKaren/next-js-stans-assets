import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

import {
  BsWhatsapp,
  BsSkype,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

import logo from "../../public/logo-white.png";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <Link href="/" className={styles.logo}>
              <Image src={logo} alt="Stan`s assets" />
            </Link>
            <ul className={styles.links_list}>
              <li>
                <a href="#" className={styles.social_link}>
                  <BsFacebook className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ihor-karen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social_link}
                >
                  <BsLinkedin className={styles.icon} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.social_link}>
                  <BsWhatsapp className={styles.icon} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.social_link}>
                  <BsSkype className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IhorKaren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social_link}
                >
                  <BsGithub className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navigation_list}>
              <li>
                <h4 className={styles.title}>SERVICES</h4>
                <ul className={styles.pages_list}>
                  <li>
                    <Link
                      href="/mobile-development"
                      className={styles.navigation_link}
                    >
                      Mobile Application Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game-development"
                      className={styles.navigation_link}
                    >
                      Game Development Outsourcing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vr-development"
                      className={styles.navigation_link}
                    >
                      VR App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sdk-development"
                      className={styles.navigation_link}
                    >
                      SDK Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/3d-modeling"
                      className={styles.navigation_link}
                    >
                      3D Modeling services
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className={styles.title}>TECHNOLOGIES</h4>
                <ul className={styles.pages_list}>
                  <li>
                    <Link href="/android" className={styles.navigation_link}>
                      Android
                    </Link>
                  </li>
                  <li>
                    <Link href="/ios" className={styles.navigation_link}>
                      IOS
                    </Link>
                  </li>
                  <li>
                    <Link href="/unity" className={styles.navigation_link}>
                      Unity
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles.main_pages_list}>
                  <li>
                    <Link href="/products">PRODUCTS</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">PORTFOLIO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about-us" className={styles.title}>
                  ABOUT US
                </Link>
                <ul className={styles.pages_list}>
                  <li>
                    <Link href="/contacts" className={styles.navigation_link}>
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className={styles.navigation_link}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/join" className={styles.navigation_link}>
                      Join the Team
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.wrap_container}>
            <div>© 2023 - Stan’s Assets. Version by Ihor Karen</div>
            <div className={styles.policy}>
              <div>
                <a href="#">Privacy policy</a>
              </div>
              <div>
                <a href="#">Cookies policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
