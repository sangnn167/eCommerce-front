import React, { FC } from 'react';
import styles from "./styles.module.css"
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

type Props = {};
export const Menu: FC<Props> = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/assets/images/logoFurniro.png" alt="" />
        <p>Furniro</p>
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/blog">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.iconContainer}>
        <ul>
          <li>
            <TbUserExclamation size={25} />
          </li>
          <li>
            <FiSearch size={25} />
          </li>
          <li>
            <IoMdHeartEmpty size={25} />
          </li>
          <li>
            <MdOutlineLocalGroceryStore size={25} />
          </li>
        </ul>
      </div>
    </div>
  )
}

