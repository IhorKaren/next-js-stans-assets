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
        <div className={styles.footer_container}>
          <div>
            <Link href="/" className={styles.footer_logo}>
              <Image src={logo} alt="Stan`s assets" />
            </Link>
            <ul className={styles.footer_links_list}>
              <li>
                <a href="#" className={styles.footer_social_link}>
                  <BsFacebook className={styles.footer_social_link_icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ihor-karen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer_social_link}
                >
                  <BsLinkedin className={styles.footer_social_link_icon} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.footer_social_link}>
                  <BsWhatsapp className={styles.footer_social_link_icon} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.footer_social_link}>
                  <BsSkype className={styles.footer_social_link_icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IhorKaren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer_social_link}
                >
                  <BsGithub className={styles.footer_social_link_icon} />
                </a>
              </li>
            </ul>
          </div>
          <nav className={styles.footer_navigation}>
            <ul className={styles.footer_navigation_list}>
              <li>
                <h4 className={styles.navigation_list_title}>SERVICES</h4>
                <ul className={styles.navigation_pages_list}>
                  <li>
                    <Link
                      href="/mobile-development"
                      className={styles.navigation_list_link}
                    >
                      Mobile Application Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/game-development"
                      className={styles.navigation_list_link}
                    >
                      Game Development Outsourcing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vr-development"
                      className={styles.navigation_list_link}
                    >
                      VR App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sdk-development"
                      className={styles.navigation_list_link}
                    >
                      SDK Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/3d-modeling"
                      className={styles.navigation_list_link}
                    >
                      3D Modeling services
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className={styles.navigation_list_title}>TECHNOLOGIES</h4>
                <ul className={styles.navigation_pages_list}>
                  <li>
                    <Link
                      href="/android"
                      className={styles.navigation_list_link}
                    >
                      Android
                    </Link>
                  </li>
                  <li>
                    <Link href="/ios" className={styles.navigation_list_link}>
                      IOS
                    </Link>
                  </li>
                  <li>
                    <Link href="/unity" className={styles.navigation_list_link}>
                      Unity
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles.navigation_main_pages_list}>
                  <li>
                    <Link href="/products">PRODUCTS</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">PORTFOLIO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about-us" className={styles.navigation_list_title}>
                  ABOUT US
                </Link>
                <ul className={styles.navigation_pages_list}>
                  <li>
                    <Link
                      href="/contacts"
                      className={styles.navigation_list_link}
                    >
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className={styles.navigation_list_link}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/join" className={styles.navigation_list_link}>
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
  );
};

export default Footer;
