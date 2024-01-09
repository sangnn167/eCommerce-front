import React, { FC } from "react";
import styles from "./styles.module.css"
import { GrTrophy } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

type Props = {};

export const ShopService: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highQualityContainer}>
        <GrTrophy size={60} />
        <div className={styles.information}>
          <p className={styles.title}>High Quality</p>
          <p className={styles.describe}>crafted from top materials</p>
        </div>
        <div className={styles.highQualityContainer}>
          <LuBadgeCheck size={60} />
          <div className={styles.information}>
            <p className={styles.titleCheck}>Warranty Protection</p>
            <p className={styles.describe}>Over 2 years</p>
          </div>
        </div>
        <div className={styles.highQualityContainer}>
          <MdOutlineLocalShipping size={60} />
          <div className={styles.information}>
            <p className={styles.titleCheck}>Free Shipping</p>
            <p className={styles.describe}>Free Shipping</p>
          </div>
        </div>
        <div className={styles.highQualityContainer}>
          <BiSupport size={60} />
          <div className={styles.information}>
            <p className={styles.titleCheck}>Free Shipping</p>
            <p className={styles.describe}>Free Shipping</p>
          </div>
        </div>
      </div>
    </div>
  )
}