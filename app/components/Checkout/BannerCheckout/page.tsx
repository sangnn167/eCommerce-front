import React, { FC } from "react";
import styles from "./styles.module.css"
import { GrFormNext } from "react-icons/gr";

type Props = {};

export const BannerCheckout: FC<Props> = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src="/assets/images/bannershop.png" alt="" />
      <div className={styles.title}>
        <div className={styles.images}><img src="/assets/images/logoFurniro.png" alt="" /></div>
        <div className={styles.textShop}>Checkout</div>
        <div className={styles.textHomeShop}><p className={styles.textHome}>Home </p> <GrFormNext size={20} /> <p className={styles.cart}> Checkout</p></div>
      </div>
    </div>
  )
}