import React, { FC } from "react";
import styles from "./styles.module.css"
import { FiSearch } from "react-icons/fi";

type Props = {};

export const SearchCard: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <input type="text" />
      <div className={styles.searchIcon}>
        <FiSearch size={20}/>
      </div>
    </div>
  )
}