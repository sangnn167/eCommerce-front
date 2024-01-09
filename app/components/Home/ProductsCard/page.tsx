import React, { FC } from "react"
import styles from "./styles.module.css"
import { MdShare } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import Link from "@/node_modules/next/link";

type Props = {
  product: {
    id: number;
    name: string;
    image: string;
    discount: string;
    initialprice: string;
    currentprice: number;
    stylist: string;
  };
};

export const ProductsCard: FC<Props> = ({ product }) => {

  const formattedCurrentPrice = product.currentprice.toLocaleString('vi-VN');

  return (
    <div className={styles.container}>
      <img src={product.image} alt="" />
      {(product.discount && product.discount !== "New") && (
        <div className={styles.discount}>
          {product.discount}
        </div>
      )}
      {(product.discount && product.discount === "New") && (
        <div className={`${styles.discount} ${styles.newDiscount}`}>
          {product.discount}
        </div>
      )}
      <div className={styles.productInfo}>
        <div className={styles.title}>
          {product.name}
        </div>
        <div className={styles.describe}>
          {product.stylist}
        </div>
        <div className={styles.price}>
          <div className={styles.currentprice}>
            Rp{" "}{formattedCurrentPrice}
          </div>
          <div className={styles.initialprice}>
            {product.initialprice ? <del>Rp{" "}{product.initialprice}</del> : null}
          </div>
        </div>
        <div className={styles.hoverContent}>
          <Link href={`/home/${product.id}`}><span className={styles.addToCart}>Add to cart</span></Link>
          <div className={styles.actionButtons}>
            <div className={styles.action}>
              <MdShare /> Share
            </div>
            <div className={styles.action}>
              <LuArrowRightLeft /> Compare
            </div>
            <div className={styles.action}>
              <GoHeart /> Like
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}