import React, { FC } from "react";
import styles from "./styles.module.css"
import { Menu } from "../components/Menu/page";
import { BannerContact } from "../components/Contact/BannerContact/page";
import { ContactInfo } from "../components/Contact/ContactInfo/page";
import { ContactDetail } from "../components/Contact/ContactDetail/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";

type Props = {};

const Contact: FC<Props> = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerContact />
        <p className={styles.title}>Get In Touch With Us</p>
        <p className={styles.describe}>For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className={styles.content}>
          <ContactInfo />
          <ContactDetail />
        </div>
        <div className={styles.shopService}>
          <ShopService />
        </div>
        <div className={styles.line}></div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;