import React, { FC } from "react";
import styles from "./styles.module.css"
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

type Props = {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: {
    imageSofa: string;
    name: string;
  } | undefined;
  formattedCurrentPrice: string;
  formattedTotalPrice: string;
  navigateToCart: () => void;
  navigateToCheckout: () => void;
  navigateToProductComparison: () => void;
};

export const ProductOverlay: FC<Props> = ({
  showOverlay,
  setShowOverlay,
  selectedProduct,
  formattedCurrentPrice,
  formattedTotalPrice,
  navigateToCart,
  navigateToCheckout,
  navigateToProductComparison, }) => {

  return (
    showOverlay && (
      <div className={styles.productInfoOverlay}>
        <div className={styles.title}>
          <p>Shopping Cart</p>
          <div onClick={() => setShowOverlay(false)} className={styles.svg}>
            <IoBagRemoveOutline size={20} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.contentCart}>
          <div className={styles.imgProduct}>
            <img src={selectedProduct?.imageSofa} alt="" />
          </div>
          <div className={styles.infomation}>
            <p>{selectedProduct?.name}</p>
            <div className={styles.currentprice}>
              <div>1</div>
              <div className={styles.textX}>X</div>
              <p>Rs. {formattedCurrentPrice}</p>
            </div>

          </div>
          <MdCancel size={20} />
        </div>
        <div className={styles.totalPrice}>
          <p>Subtotal</p>
          <p className={styles.price}>Rs. {formattedTotalPrice}</p>
        </div>
        <div className={styles.linePirce}></div>
        <div className={styles.button}>
          <button className={styles.buttonCart} onClick={navigateToCart}>
            Cart
          </button>
          <button className={styles.buttonCheckout} onClick={navigateToCheckout}>
            Checkout
          </button>
          <button className={styles.buttonComparison} onClick={navigateToProductComparison}>
            Comparison
          </button>
        </div>
      </div>
    )
  )
} 