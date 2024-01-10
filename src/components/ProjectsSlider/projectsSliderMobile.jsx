"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Link from "next/link";

import styles from "./projectsSlider.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import data from "../../../resources/productsData";

const ProjectsSliderMobile = () => {
  return (
    <Swiper
      allowTouchMove={true}
      speed={1200}
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, A11y]}
      className={styles.slider_mobile}
    >
      {data.projectsData.map(({ id, img, title, text, path }) => {
        return (
          <SwiperSlide key={id}>
            <div className={styles.slide_card_mobile}>
              <Link href={path}>
                <Image
                  src={img}
                  alt={title}
                  className={styles.image_mobile}
                  placeholder="blur"
                />
              </Link>
              <div className={styles.wrap_mobile}>
                <Link href={path}>
                  <h3 className={styles.title_mobile}>{title}</h3>
                </Link>
                <p>{text}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectsSliderMobile;
