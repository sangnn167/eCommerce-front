import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {
  Images: string;
  Title: string;
  date: string;
};

export const RecentPosts: FC<Props> = ({ Images, Title, date }) => {
  return (
    <div className={styles.container}>
      <img src={Images} alt="" />
      <div>
        <div className={styles.title}>{Title}</div>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  )
}