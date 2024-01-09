import React, { FC } from "react";
import styles from "./styles.module.css"
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  Name: string | undefined;
  Currentprice: string | number| undefined;
  Review: number | undefined;
  Describe: string | undefined;
};

export const ProductInfo: FC<Props> = ({ Name, Currentprice, Review, Describe }) => {
  return (
    <>
      <p className={styles.textName}>{Name}</p>
      <p className={styles.textPrice}>RS. {Currentprice}</p>
      <div className={styles.star}>
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStarHalf size={18} />
        <div className={styles.line}></div>
        <p>
          {Review} Customer Review
        </p>
      </div>
      <div className={styles.textDescribe} dangerouslySetInnerHTML={{
        __html: `<p>${Describe}</p>`
      }}></div>
      <div className={styles.textSize}>
        Size
      </div>
      <div className={styles.select}>
        <p className={styles.sizeL}>L</p>
        <p className={styles.sizeXL}>XL</p>
        <p className={styles.sizeXL}>XS</p>
      </div>
      <div className={styles.textColor}>
        Color
      </div>
      <div className={styles.select}>
        <p className={styles.colorBlue}></p>
        <p className={styles.colorBlack}></p>
        <p className={styles.colorOrange}></p>
      </div>
    </>
  )
}