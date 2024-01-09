import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {};

export const FurnitureImages: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgTopLeft}>
        <div className={styles.images1}>
          <img className={styles.img1} src="/assets/images/img1.png" alt="" />
          <img className={styles.img2} src="/assets/images/img2.png" alt="" />
        </div>
        <div className={styles.images1}>
          <img className={styles.img3} src="/assets/images/img3.png" alt="" />
          <img className={styles.img4} src="/assets/images/img4.png" alt="" />
        </div>
      </div>
      <img className={styles.img5} src="/assets/images/img5.png" alt="" />
      <div className={styles.imgTopRight}>
        <div className={styles.images1}>
          <img className={styles.img6} src="/assets/images/img6.png" alt="" />
          <img className={styles.img7} src="/assets/images/img7.png" alt="" />
        </div>
        <div className={styles.images1}>
          <img className={styles.img8} src="/assets/images/img8.png" alt="" />
          <img className={styles.img9} src="/assets/images/img9.png" alt="" />
        </div>
      </div>
    </div>
  )
}