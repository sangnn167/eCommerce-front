import React, { FC } from "react"
import styles from "./styles.module.css"
import { GoArrowRight } from "react-icons/go";

type Props = {};

export const BedRoom: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/images/roombeds.png" alt="" />
      <div className={styles.bedroom}>
        <div className={styles.titleBedroom}>
          <div className={styles.title}>
            01 <div className={styles.line}></div> Bed Room
          </div>
          <div className={styles.describe}>
            Inner Peace
          </div>
        </div>
        <div className={styles.action}>
          <GoArrowRight size={25} />
        </div>
      </div>
    </div>
  )
}