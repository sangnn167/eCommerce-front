import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {
  currentprice: number | undefined;
  navigateToProductCart: () => void;
};

const CartTotal: FC<Props> = ({currentprice,navigateToProductCart}) => {

  const formattedPrice = currentprice?.toLocaleString('vi-VN');

  return (
    <div className={styles.container}>
      <p className={styles.textCart}>Cart Totals</p>
      <div className={styles.subtotal}>
        <p className={styles.textSubtotal}>Subtotal</p>
        <p className={styles.currentprice}>Rs. {formattedPrice}</p>
      </div>
      <div className={styles.total}>
        <p className={styles.textSubtotal}>Subtotal</p>
        <p className={styles.currentprice}>Rs. {formattedPrice}</p>
      </div>
      <button className={styles.button} onClick={navigateToProductCart}>Checkout</button>
    </div>
  )
}

export default CartTotal;