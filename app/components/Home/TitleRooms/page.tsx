import React, { FC } from "react"
import styles from "./styles.module.css"
import { ShowMoreButton } from "../../Common/Button";


type Props = {};

export const TitleRooms: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        50+ Beautiful rooms <br />inspiration
      </p>
      <p className={styles.describe}>
        Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you
      </p>
      <ShowMoreButton  title="Explore More" className={styles.button}/>
    </div>
  )
}