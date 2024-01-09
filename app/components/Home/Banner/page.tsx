import React, { FC } from 'react';
import styles from "./styles.module.css"


type Props = {};

export const Banner: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/images/banner.jpg" alt="banner" />
    </div>
  )
}