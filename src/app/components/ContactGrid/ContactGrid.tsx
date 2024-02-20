import React from "react";

import ContactsIcon from "app/assets/contact-me/contact-me.png";
import InfoIcon from "app/assets/contact-me/id-card.png";
import LocationIcon from "app/assets/contact-me/location-pin.png";

import { Contact } from "app";
import styles from "./ContactGrid.module.scss";

export const ContactGrid: React.FC = () => {
  return (
    <>
      <div className={styles["contacts-container"]}>
        <div className={styles["contacts-container-item"]}>
          <Contact title="Informations:" image={InfoIcon} />
          <div className={styles["contacts-info-item"]}>
            <p>Paljko Urbanek</p>
            <p>23 years young</p>
            <p>Student at FEI STU - applied informatics</p>
            <p>Fanatic of the series The Office US</p>
            <p>Likes chess</p>
          </div>
        </div>
        <div className={styles["contacts-container-item"]}>
          <Contact title="Contact me:" image={ContactsIcon} />
          <div className={styles["contacts-info-item"]}>
            <p>+421950262401</p>
            <p>palkourbanek45@gmail.com</p>
            <p>linkedin.com/in/paľkourbanek</p>
          </div>
        </div>
        <div className={styles["contacts-container-item"]}>
          <Contact title="Address:" image={LocationIcon} />
          <div className={styles["contacts-info-item"]}>
            <p>Located in: Bratislava Slovakia</p>
            <p>Comes from: Kovačica Serbia</p>
          </div>
        </div>
      </div>
    </>
  );
};
