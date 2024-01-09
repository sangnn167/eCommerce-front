"use client"
import React, { FC, useState } from "react";
import styles from "./styles.module.css"
import { ShowMoreButton } from "@/app/components/Common/Button";

type Props = {
  name: string | undefined;
  currentprice: number | undefined;
};

export const PlaceOrder: FC<Props> = ({ name, currentprice }) => {
  const [bankTransferChecked, setBankTransferChecked] = useState<boolean>(false);
  const [cashOnDeliveryChecked, setCashOnDeliveryChecked] = useState<boolean>(false);

  const formattedCurrentPrice = currentprice?.toLocaleString('vi-VN');

  const handleBankTransferChange = () => {
    if (!bankTransferChecked) {
      setBankTransferChecked(true);
      setCashOnDeliveryChecked(false);
    }
  };

  const handleCashOnDeliveryChange = () => {
    if (!cashOnDeliveryChecked) {
      setCashOnDeliveryChecked(true);
      setBankTransferChecked(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.textTitle}>Product</div>
          <div className={styles.textTitle}>Subtotal</div>
        </div>
        <div className={styles.nameProduct}>
          <div className={styles.titleName}><p>{name}</p><p className={styles.textx}>x 1</p></div><div className={styles.priceProduct}>Rs. {formattedCurrentPrice}</div>
        </div>
        <div className={styles.nameProduct}>
          <div className={styles.titleName}>Subtotal</div><div className={styles.priceProduct}>Rs. {formattedCurrentPrice}</div>
        </div>
        <div className={styles.nameProduct}>
          <div className={styles.titleName}>Total</div><div className={styles.priceTotal}>Rs. {formattedCurrentPrice}</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.titleDirect}><div className={styles.dot}></div><p>Direct Bank Transfer</p></div>
        <p className={styles.describe}>
          Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account
        </p>
        <div className={styles.checkboxContainer}>
          <div className={styles.bankTransferChecked}>
            <input
              type="checkbox"
              checked={bankTransferChecked}
              onChange={handleBankTransferChange}
            />
            <span>Direct Bank Transfer</span>
          </div>
          <div className={styles.cashOnDeliveryChecked}>
            <input
              type="checkbox"
              checked={cashOnDeliveryChecked}
              onChange={handleCashOnDeliveryChange}
            />
            <span>Cash On Delivery</span>
          </div>
        </div>
        <p>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account,<br /> for other purposes described in our <strong>privacy policy.</strong></p>
        <div className={styles.button}>
          <ShowMoreButton title="Place order" className={styles.buttonShowMore} />
        </div>
      </div>
    </div>
  )
}