import React, { FC } from "react";
import styles from "./styles.module.css"
import { GrFormNext } from "react-icons/gr";

type Props = {};

export const BannerShop: FC<Props> = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src="/assets/images/bannershop.png" alt="" />
      <div className={styles.title}>
        <div className={styles.textShop}>Shop</div>
        <div className={styles.textHomeShop}><p className={styles.textHome}>Home </p> <GrFormNext size={20}/> <p className={styles.shop}> Shop</p></div>
      </div>
    </div>
  )
}