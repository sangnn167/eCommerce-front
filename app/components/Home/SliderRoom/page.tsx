"use client";
import React, {FC, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { GrNext } from "react-icons/gr";

type Props = {};

const SliderRoom:FC<Props> = () => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} ref={sliderRef}>
        <div className={styles.images}>
          <img src="/assets/images/slider.png" alt="" />
        </div>
        <div className={styles.images}>
          <img src="/assets/images/slider2.jpg" alt="" />
        </div>
        <div className={styles.images}>
          <img src="/assets/images/slider.png" alt="" />
        </div>
        <div className={styles.images}>
          <img src="/assets/images/slider2.jpg" alt="" />
        </div>
      </Slider>
      <div className={styles.customDots}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={index === currentSlide ? styles.dotWrapper : ""}
            onClick={() => handleSlideChange(index)}
          >
            <span className={index === currentSlide ? styles.activeDot : ""} />
          </div>
        ))}
      </div>
      <div onClick={handleNextSlide} className={styles.nextSlider}><GrNext size={18}/></div>
    </div>
  );
};

export default SliderRoom;
