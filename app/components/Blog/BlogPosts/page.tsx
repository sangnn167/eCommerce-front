import React, { FC } from "react";
import styles from "./styles.module.css"
import { FaCalendar, FaUser, FaTag } from "react-icons/fa6";

type Props = {
  User: string;
  Images: string;
  Date: string;
  Tags: string;
  Title: string;
  Content: string;
};

export const BlogPosts: FC<Props> = ({User,Images,Date,Tags,Title,Content}) => {
  return (
    <div className={styles.contaier}>
      <img className={styles.images} src={Images} alt="" />
      <div className={styles.information}>
        <div className={styles.user}>
          <FaUser size={20} /> <p>{User}</p>
        </div>
        <div className={styles.user}>
          <FaCalendar size={20} /> <p>{Date}</p>
        </div>
        <div className={styles.user}>
          <FaTag size={20} /> <p>{Tags}</p>
        </div>
      </div>
      <p className={styles.title}>{Title}</p>
      <div className={styles.description} dangerouslySetInnerHTML={{
        __html: `<p>${Content}</p>`
      }}></div>
      <div className={styles.readMore}>
        <p>Read more</p>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}