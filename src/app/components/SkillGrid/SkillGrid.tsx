import React from "react";

import ReactIcon from "app/assets/skills/react.png";
import JSIcon from "app/assets/skills/js.png";
import TypescriptIcon from "app/assets/skills/typescript.png";
import PythonIcon from "app/assets/skills/python.png";
import HtmlIcon from "app/assets/skills/css-3.png";
import CSSIcon from "app/assets/skills/html-5.png";

import { Skill } from "app";
import styles from "./SkillGrid.module.scss";

export const SkillGrid: React.FC = () => {
  return (
    <>
      <div className={styles["skills-container"]}>
        <div className={styles["skills-container-item"]}>
          <Skill title="React" image={ReactIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="JavaScript" image={JSIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Typescript" image={TypescriptIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="Python" image={PythonIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="HTML" image={HtmlIcon} />
        </div>
        <div className={styles["skills-container-item"]}>
          <Skill title="CSS" image={CSSIcon} />
        </div>
      </div>
    </>
  );
};
