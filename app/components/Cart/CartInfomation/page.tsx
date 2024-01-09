import React, { FC } from "react";
import styles from "./styles.module.css"
import { AiFillDelete } from "react-icons/ai";

type Props = {
  Images: string | undefined;
  name: string | undefined;
  currentprice: number | undefined;
};

export const CartInfomation: FC<Props> = ({ Images, name, currentprice }) => {

  const formattedPrice = currentprice?.toLocaleString('vi-VN');
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.textProduct}>
          Product
        </p>
        <p className={styles.textPrice}>
          Price
        </p>
        <p className={styles.textQuantity}>
          Quantity
        </p>
        <p className={styles.textSubtotal}>
          Subtotal
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.images} >
          <img src={Images} alt={"product.name"} />
        </div>
        <p className={styles.textName}>
          {name}
        </p>
        <div className={styles.textCurrentprice}>
          <p>Rs.</p>{formattedPrice}
        </div>
        <div className={styles.quantity}>
          1
        </div>
        <div className={styles.textSubtotal}>
          <p>Rs.</p>{formattedPrice}
        </div>
        <AiFillDelete size={21} color="#B88E2F" />
      </div>


    </div >
  )
}