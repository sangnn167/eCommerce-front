import React, { FC } from "react";
import styles from "./styles.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

type Props = {};

export const ContactInfo: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.addrees}>
          <FaLocationDot size={22} />
          <div>
            <p className={styles.textTitle}>Addrees</p>
            <p>236 5th SE Avenue, New <br />York NY1000, United <br />States</p>
          </div>
        </div>
        <div className={styles.addrees}>
          <FaPhoneAlt size={22} />
          <div>
            <p className={styles.textTitle}>Phone</p>
            <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 546-6789</p>
          </div>
        </div>
        <div className={styles.addrees}>
          <MdAccessTimeFilled size={22} />
          <div>
            <p className={styles.textTitle}>Working Time</p>
            <p>Monday-Friday: 9:00 - <br />22:00 <br />Saturday-Sunday: 9:00 - <br />21:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}