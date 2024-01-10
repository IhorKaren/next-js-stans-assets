"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import styles from "./hero.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import data from "../../../resources/productsData";

import mobileImage from "../../../public/mobile-hero.webp";

const Hero = () => {
  const buttons = () => {
    return (
      <div className={styles.hero_btns_thumb}>
        <Link href="portfolio" className={styles.more_btn}>MORE</Link>
        <Link href="contacts" className={styles.contact_btn}>CONTACT US</Link>
      </div>
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider_container}>
        <Swiper
          allowTouchMove={false}
          speed={1200}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation, A11y]}
        >
          {data.heroData.map(
            ({ id, img, Tag, title, subtitle, text, paragraph }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={styles.slide}>
                    <Image
                      src={img}
                      alt={title}
                      placeholder="blur"
                      className={styles.hero_image}
                    />
                    <div className={styles.hero_thumb}>
                      <Tag className={styles.hero_title}>{title}</Tag>
                      {subtitle && (
                        <span className={styles.highlight}>{subtitle}</span>
                      )}
                      <p className={styles.hero_text}>
                        {text}
                        {paragraph && (
                          <>
                            <br />
                            <br />
                            {paragraph}
                          </>
                        )}
                      </p>
                      {buttons()}
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <div className={styles.mobile_hero}>
        <div className={styles.mobile_hero_image}>
          <Image src={mobileImage} alt="Ori" placeholder="blur" />
        </div>
        <div className={styles.text_wrap}>
          <h1 className={styles.mobile_hero_title}>
            FOCUS ON THE PRODUCT AND LET US DO THE REST!
          </h1>
          <div className={styles.hero_btns_wrap}>{buttons()}</div>
          <p>
            We’re an Indian software development company focused on just one
            thing - offshore software development services. We have 16+ years of
            experience and a team of 450+ developers working efficiently to
            deliver unique solutions to start-ups, software development
            companies, enterprises, and digital agencies to simplify their IT
            outsourcing experience & reduce time/cost to market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
