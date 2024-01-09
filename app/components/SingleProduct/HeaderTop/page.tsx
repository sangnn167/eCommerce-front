import React, { FC } from "react";
import styles from "./styles.module.css"
import { GrFormNext } from "react-icons/gr";

type Props = {
  productName: {
    name: string;
  };
};

export const HeaderTop: FC<Props> = ({productName}) => {
  return (
    <div className={styles.container}>
      <p className={styles.textHome}>Home</p>
      <GrFormNext size={22} />
      <p className={styles.textShop}>Shop</p>
      <GrFormNext size={22} />
      <div className={styles.line}></div>
      <div >
        {productName.name}
      </div>
    </div>
  )
}