import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoSkype,
  BiLogoGithub,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <Link href="/" className={styles.logo}>
              <Image
                src="/../public/logo-white.png"
                width="202"
                height="52"
                alt="Stan`s assets"
              />
            </Link>
            <ul className={styles.links_list}>
              <li>
                <a href="" className={styles.social_link}>
                  <BiLogoFacebookCircle
                    size="cssSize"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link}>
                  <BiLogoLinkedin size="cssSize" className={styles.icon} />
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link}>
                  <BiLogoWhatsapp size="cssSize" className={styles.icon} />
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link}>
                  <BiLogoSkype size="cssSize" className={styles.icon} />
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link}>
                  <BiLogoGithub size="cssSize" className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
          <ul className={styles.navigation}>
            <li>
              <h4 className={styles.title}>SERVICES</h4>
              <ul className={styles.pages_list}>
                <li>
                  <Link href="/mobile-development">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link href="/game-development">
                    Game Development Outsourcing
                  </Link>
                </li>
                <li>
                  <Link href="/vr-development">VR App Development</Link>
                </li>
                <li>
                  <Link href="/sdk-development">SDK Development</Link>
                </li>
                <li>
                  <Link href="/3d-modeling">3D Modeling services</Link>
                </li>
              </ul>
            </li>
            <li>
              <h4 className={styles.title}>TECHNOLOGIES</h4>
              <ul className={styles.pages_list}>
                <li>
                  <Link href="/android">Android</Link>
                </li>
                <li>
                  <Link href="/ios">IOS</Link>
                </li>
                <li>
                  <Link href="/unity">Unity</Link>
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
                <li>
                  <Link href="/blog">BLOG</Link>
                </li>
              </ul>
            </li>
            <li>
              <h4 className={styles.title}>ABOUT US</h4>
              <ul className={styles.pages_list}>
                <li>
                  <Link href="">Contacts</Link>
                </li>
                <li>
                  <Link href="">Team</Link>
                </li>
                <li>
                  <Link href="">Join the Team</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.wrap_container}>
            <div>© 2023 - Stan’s Assets. All Right Reserved</div>
            <div className={styles.policy}>
              <div>
                <a href="">Privacy policy</a>
              </div>
              <div>
                <a href="">Cookies policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
