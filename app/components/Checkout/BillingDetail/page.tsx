import React, { FC } from "react";
import styles from "./styles.module.css"
import { TextInput } from "../../Common/TextInput/page";

type Props = {};

export const BillingDetail: FC<Props> = () => {
  return (
    <div className={styles.billingDetail}>
      <div className={styles.container}>
        <p className={styles.textBilling}>Billing details</p>
        <div className={styles.nameUser}>
          <div className={styles.name}>
            <TextInput name="firstname" label="First Name" type="text" />
          </div>
          <div className={styles.name}>
            <TextInput name="lastname" label="Last Name" type="text" />
          </div>
        </div>
        <div className={styles.input}>
          <TextInput name="companyName" label="Company Name (Optional)" type="text" />
        </div>
        <div className={styles.select}>
          <label htmlFor="country">Country / Region</label>
          <select name="country" id="country">
            <option value="sl">Sri Lanka</option>
            <option value="vn">VietNam</option>
            <option value="jp">Japan</option>
          </select>
        </div>
        <div className={styles.input}>
          <TextInput name="address" label="Street address" type="text" />
        </div>
        <div className={styles.input}>
          <TextInput name="city" label="Town / City" type="text" />
        </div>
        <div className={styles.select}>
          <label htmlFor="province">Province</label>
          <select name="province" id="province">
            <option value="wp">Westerm Province</option>
            <option value="hy">HungYen</option>
            <option value="jp">Tokyo</option>
          </select>
        </div>
        <div className={styles.input}>
          <TextInput name="zipcode" label="ZIP code" type="text" />
        </div>
        <div className={styles.input}>
          <TextInput name="phone" label="Phone" type="text" />
        </div>
        <div className={styles.inputEmail}>
          <TextInput name="email" label="Email" type="email" />
        </div>
        <div className={styles.inputAdd}>
          <TextInput name="additional" placeholder="Additional information" type="text" />
        </div>
      </div>
    </div>
  )
}