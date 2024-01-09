import React, { FC } from "react"
import styles from "./styles.module.css"

type Props = {
  name: string;
  imageroom: string | undefined;
};

export const Browse: FC<Props> = ({ name,imageroom }) => {
  return (
    <div className={styles.container}>
      <img src={imageroom} alt="" />
      <div className={styles.titleProduct}>
        {name}
      </div>
    </div>
  )
}