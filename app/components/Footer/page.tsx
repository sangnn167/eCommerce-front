import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div>
            <p>Funiro.</p>
            <div className={styles.describe}>
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
            </div>
          </div>
          <div className={styles.menuLinks}>
            <div className={styles.textLink}>Links</div>
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
          <div className={styles.menuHelp}>
            <div className={styles.textLink}>Help</div>
            <ul>
              <li>
                <a href="">Payment Options</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className={styles.menuHelp}>
            <div className={styles.textLink}>Newsletter</div>
            <div className={styles.text}>
              <div className={styles.address}>
                <input type="text" placeholder="Enter Your Email Address" />
                <div className={styles.line}></div>
              </div>
              <div className={styles.textSubscribe}>
                SUBSCRIBE
                <div className={styles.lineSubscribe}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineFooter}></div>
        <p className={styles.end}>
          2023 furino. All rights reverved
        </p>
      </div>
    </div>
  )
}