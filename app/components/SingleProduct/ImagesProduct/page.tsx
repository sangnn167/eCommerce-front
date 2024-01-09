import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {
  mainImage: string | undefined;
  additionalImages: { idImg: number; img: string }[] | undefined;
  productName: string | undefined;
};

export const ImagesProduct: FC<Props> = ({ mainImage, additionalImages, productName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {additionalImages?.map((image) => (
          <div key={image.idImg} className={styles.img}>
            <img className={styles.images} src={image.img} alt={productName} />
          </div>
        ))}
      </div>
      <div className={styles.mainImage}>
        <img src={mainImage} alt={productName} />
      </div>
    </div>
  )
}