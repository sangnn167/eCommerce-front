import React, { FC } from "react";
import styles from "./styles.module.css"
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  images: string | undefined;
  name: string | undefined;
  currentprice: number | undefined;
  star: string | undefined;
  review: string | undefined;
};

export const ProductComparison: FC<Props> = ({ review, star, images, name, currentprice }) => {
  const formattedPrice = currentprice?.toLocaleString('vi-VN');
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.pageTitle}>Go to Product <br /> page for more <br />
          Products</p>
        <p className={styles.viewMore}>View More</p>
      </div>
      <div className={styles.product}>
        <div className={styles.img}>
          <img src={images} alt="" />
        </div>
        <p className={styles.nameProduct}>{name}</p>
        <p className={styles.priceProduct}>Rs. {formattedPrice}</p>
        <div className={styles.star}>
          <p className={styles.textStar}>{star}</p>
          <div className={styles.iconStar}>
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStarHalf size={18} />
            <div className={styles.line}></div>
            <p>
              {review} Review
            </p>
          </div>
        </div>
      </div>
      <div className={styles.productComparison}>
        <div className={styles.img}>
          <img src="/assets/images/comparison.png" alt="" />
        </div>
        <p className={styles.nameProduct}>Outdoor Sofa Set</p>
        <p className={styles.priceProduct}>Rs. 224.000.00</p>
        <div className={styles.star}>
          <p className={styles.textStar}>4.2</p>
          <div className={styles.iconStar}>
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStarHalf size={18} />
            <div className={styles.line}></div>
            <p>
              145 Review
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.textAdd}>Add A Product</p>
        <div className={styles.buttonAdd}>Choose a Product <IoIosArrowDown size={20} /></div>
      </div>
    </div>
  )
}