"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Link from "next/link";
import ProjectsSliderMobile from "./projectsSliderMobile";
import styles from "./projectsSlider.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import data from "../../resources/productsData";

const ProjectsSlider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <h3 className={styles.main_title}>Recent Projects</h3>
        <div>
          <Swiper
            allowTouchMove={false}
            speed={1200}
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation, A11y]}
            className={styles.slider}
          >
            {data.projectsData.map(({ id, img, title, text, path }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={styles.slide_card}>
                    <Link href={path}>
                      <Image
                        src={img}
                        alt={title}
                        className={styles.image}
                        placeholder="blur"
                      />
                    </Link>
                    <div className={styles.wrap}>
                      <Link href={path}>
                        <h3 className={styles.title}>{title}</h3>
                      </Link>
                      <p>{text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ProjectsSliderMobile />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
