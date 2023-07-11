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
      <div>
        <button type="button">MORE</button>
        <button type="button">CONTACT US</button>
      </div>
    );
  };

  return (
    <>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Autoplay, Navigation]}
          allowTouchMove={false}
          speed={1000}
          navigation
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className={styles.slide}>
            <h1>STAN’S ASSETS - IT OUTSOURCING DEVELOPMENT COMPANY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              soluta sint sed cum tenetur! Totam rem nulla incidunt unde
              sapiente earum. Qui eaque accusantium dolorum veniam ab saepe
              molestias deserunt.
            </p>
            {buttons()}
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h2>FOCUS ON THE PRODUCT AND LET US DO THE REST!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              soluta sint sed cum tenetur! Totam rem nulla incidunt unde
              sapiente earum. Qui eaque accusantium dolorum veniam ab saepe
              molestias deserunt.
            </p>
            {buttons()}
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h2>
              PRODUCT PERFECTION MADE EASY - STAN’S ASSETS, YOUR OUTSOURCING
              EXPERTS
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              soluta sint sed cum tenetur! Totam rem nulla incidunt unde
              sapiente earum. Qui eaque accusantium dolorum veniam ab saepe
              molestias deserunt.
            </p>
            {buttons()}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
