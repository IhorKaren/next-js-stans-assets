"use client";
// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import styles from "./hero.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const buttons = () => {
    return (
      <div className={styles.btns_thumb}>
        <button type="button" className={styles.more_btn}>
          MORE
        </button>
        <button type="button" className={styles.contact_btn}>
          CONTACT US
        </button>
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
          loop={true}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation, A11y]}
        >
          <SwiperSlide>
            <div className={`${styles.slide} ${styles.slide_first}`}>
              <div className={styles.thumb}>
                <h1 className={styles.title}>
                  STAN’S ASSETS - IT OUTSOURCING DEVELOPMENT COMPANY
                </h1>
                <span className={styles.highlight}>
                  FOCUS ON THE PRODUCT AND LET US DO THE REST!
                </span>
                <p className={styles.text}>
                  We’re a software development company focused on just one thing
                  - offshore software development services. We have 16+ years of
                  experience and a team of 450+ developers working efficiently
                  to deliver unique solutions to start-ups, software development
                  companies, enterprises, and digital agencies to simplify their
                  IT outsourcing experience & reduce time/cost to market.
                </p>
                {buttons()}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slide} ${styles.slide_second}`}>
              <div className={styles.thumb}>
                <h2 className={styles.title}>
                  FOCUS ON THE PRODUCT AND LET US DO THE REST!
                </h2>

                <p className={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  soluta sint sed cum tenetur! Totam rem nulla incidunt unde
                  sapiente earum. Qui eaque accusantium dolorum veniam ab saepe
                  molestias deserunt.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores. Fugit quasi odit repellendus, officiis aliquid
                  eius vel. Illum suscipit eaque amet numquam nulla incidunt
                  maiores eligendi ipsa laboriosam sunt!
                </p>
                {buttons()}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slide} ${styles.slide_third}`}>
              <div className={styles.thumb}>
                <h2 className={styles.title}>
                  PRODUCT PERFECTION MADE EASY - STAN’S ASSETS, YOUR OUTSOURCING
                  EXPERTS
                </h2>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  soluta sint sed cum tenetur! Totam rem nulla incidunt unde
                  sapiente earum. Qui eaque accusantium dolorum veniam ab saepe
                  molestias deserunt.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores. Fugit quasi odit repellendus, officiis aliquid
                  eius vel. Illum suscipit eaque amet numquam nulla incidunt
                  maiores eligendi ipsa laboriosam sunt!
                </p>
                {buttons()}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
