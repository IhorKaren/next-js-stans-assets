"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import styles from "./hero.module.scss";

import "swiper/css";
import "swiper/css/pagination";

import data from "../../resources/sliderData";

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
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, A11y]}
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
                      className={styles.image}
                    />
                    <div className={styles.thumb}>
                      <Tag className={styles.title}>{title}</Tag>
                      {subtitle && (
                        <span className={styles.highlight}>{subtitle}</span>
                      )}
                      <p className={styles.text}>
                        {text}
                        {paragraph && (
                          <>
                            <br />
                            <br />
                            {paragraph}
                          </>
                        )}
                      </p>
                    </div>
                    {buttons()}
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <div className="swiper-custom-pagination"></div>
      </div>
    </section>
  );
};

export default Hero;
