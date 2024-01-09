"use client";
import React, { FC } from "react";
import styles from "./styles.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


type Props = {};

const Test: FC<Props> = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.test}>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
        <div>
          <img width={"500px"} src="/assets/images/grifo.png" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Test;