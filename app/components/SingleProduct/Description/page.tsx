import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {
  Review: number | undefined;
  Description: string | undefined
  Images: string | undefined;
};

export const Description: FC<Props> = ({ Review, Description, Images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.textDescription}>Description</p>
        <p>Additional Information</p>
        <p>Reviews [{Review}]</p>
      </div>
      <div className={styles.description} dangerouslySetInnerHTML={{
        __html: `<p>${Description}</p>`
      }}>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.imgContainer}>
          <img src={Images} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={Images} alt="" />
        </div>
      </div>
    </div>
  )
}