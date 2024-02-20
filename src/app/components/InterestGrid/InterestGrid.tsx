import React from "react";

import BitcoinIcon from "app/assets/interests/bitcoin.png";
import EtherumIcon from "app/assets/interests/etherum.png";
import FinancingIcon from "app/assets/interests/budget.png";
import CookingIcon from "app/assets/interests/cooking.png";
import FolkloreIcon from "app/assets/interests/folklore-music.png";
import ListenIcon from "app/assets/interests/listen.png";
import PrCIcon from "app/assets/interests/photoshop-lightroom-classic.png";
import PodcastIcon from "app/assets/interests/podctast.png";

import { Skill } from "app";
import styles from "./InterestGrid.module.scss";

export const InterestGrid: React.FC = () => {
  return (
    <>
      <div className={styles["skills-container"]}>
        <div className={styles["skills-container-item"]}>
          <Skill title="Slovak Folklore" image={FolkloreIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Cooking" image={CookingIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Rock/Lo-FI" image={ListenIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Podcasts" image={PodcastIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Photos" image={PrCIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Finance" image={FinancingIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Bitcoin" image={BitcoinIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Etherum" image={EtherumIcon} />
        </div>
      </div>
    </>
  );
};
