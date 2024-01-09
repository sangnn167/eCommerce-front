import React, { FC } from "react";
import styles from "./styles.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

type Props = {
  Sku: string | undefined;
  Category: string | undefined;
  Tags: string | undefined
  handleAddToCart: () => void;
};

export const ActionButton: FC<Props> = ({ Sku, Category, Tags , handleAddToCart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonNumber}>
          <div className={styles.reduce}>-</div>1<div className={styles.add}>+</div>
        </div>
        <div className={styles.buttonAdd} onClick={handleAddToCart}>
          Add To Cart
        </div>
        <div className={styles.buttonCompare}>
          + Compare
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.infomation}>
        <div className={styles.lable}>SKU</div>
        <div className={styles.separator}>:</div>
        <span>{Sku}</span>
      </div>
      <div className={styles.infomation}>
        <div className={styles.lable}>Category</div>
        <div className={styles.separator}>:</div>
        <span>{Category}</span>
      </div>
      <div className={styles.infomation}>
        <div className={styles.lable}>Tags</div>
        <div className={styles.separator}>:</div>
        <span>{Tags}</span>
      </div>
      <div className={styles.share}>
        <div className={styles.lable}>Share</div>
        <div className={styles.separator}>:</div>
        <span><FaFacebook size={20} /> <FaLinkedin size={20} /> <AiFillTwitterCircle size={22} /></span>
      </div>
    </div>
  )
}
