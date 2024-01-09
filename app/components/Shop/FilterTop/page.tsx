import React, { FC } from "react";
import styles from "./styles.module.css"
import { LiaSlidersHSolid } from "react-icons/lia";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";

type Props = {};

export const FillterTop: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <LiaSlidersHSolid size={25} />
        <p>Filter</p>
        <PiCirclesFourFill size={25} />
        <div className={styles.viewList}>
          <BsViewList size={25} />
        </div>
        <div className={styles.line}></div>
        <div className={styles.textShowing}>Showing 1-16 of 36 results</div>
        <div className={styles.textShow}>Show</div>
        <div className={styles.leght}>16</div>
        <div className={styles.textShow}>Short by</div>
        <div className={styles.shortBy}>Default</div>
      </div>
    </div>
  )
}