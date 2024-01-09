import React,{FC} from "react";
import styles from "./styles.module.css"
import { TextInput } from "../../Common/TextInput/page";
import { ShowMoreButton } from "../../Common/Button";

type Props = {};

export const ContactDetail:FC<Props> = () => {
  return(
    <div className={styles.container}>
      <div className={styles.input}>
        <TextInput label="Your Name" type="text" placeholder="Abc"/>
      </div>
      <div className={styles.input}>
        <TextInput label="Email address" type="email" placeholder="Abc@def.com"/>
      </div>
      <div className={styles.input}>
        <TextInput label="Subject" type="text" placeholder="This is an optional"/>
      </div>
      <div className={styles.inputMessage}>
        <p>Message</p>
        <input type="text" placeholder="Hi! i’d like to ask about"/>
      </div>
      <ShowMoreButton className={styles.buttonSubmit} title="Submit"/>
    </div>
  )
}