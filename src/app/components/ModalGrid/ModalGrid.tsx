import React, { useContext, useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import Button from "@mui/material/Button";

import {
  CardCustom,
  IAboutModalInfo,
  ModalCustom,
  ProjectsContext,
  setCustomModal,
  useAppDispatch,
} from "app";

import styles from "./ModalGrid.module.scss";

const whoAmIInfo = {
  title: "Who am I?",
  subtitle: "boring part",
  sectionText: `Greetings, reader! My name is Paljko Urbanek. I come originally from Serbia, fact I hold with pride. 
  However, I am equally proud to claim Slovak nationality. My upbringing was rooted in the charming Slovak town Kovačica, 
  where I spent 14 years before embarking on my educational journey in Slovakia.
  Currently, I am diligently pursuing my studies, nearing the culmination of my master's studies in Applied Informatics at FEI STU in Bratislava. 
  If you wish to delve deeper into my experiences and qualifications, I invite you to peruse my CV.`,
};

const myExperienceInfo = {
  title: "My professional experience",
  subtitle: "not boring part",
  sectionText: `My professional journey started last year at Zurich Insurance Group Ltd, where I began as an intern. 
  During my tenure, I immersed myself in a dynamic environment, engaging with technologies such as React, Typescript, and Agile methodologies. 
  Collaborating within a Scrum framework. I gained hands-on experience with pipelines, Azure DevOps, and Jira, 
  while meticulously translating Figma designs into functional code under the guidance of seasoned mentors, I embraced these new technologies wholeheartedly, 
  discovering a genuine passion for them. Now, I am steadfast in my pursuit of a career centered around these technologies, 
  alongside a keen interest in expanding my expertise to encompass backend development and database management. Technologies like NestJS, Remix, 
  Prisma Gen AI have captured my curiosity, for my aspiration to evolve into a proficient full-stack developer.
  During my tenure, I contributed to a project and developing multiple components, hosted on bit cloud as a standardization of applications within the company.`,
};

const whyQinShiftInfo = {
  title: "Why you?",
  subtitle: "definitely not boring part",
  sectionText: `As a current student eagerly seeking to transition into full-time employment, I view this opportunity as the next logical step in my journey a moment akin to sacrificing a rook in chess, a strategic move with significant potential. 
  Upon discovering your company and delving into its narrative, I found myself captivated by its trajectory. 
  Far from being a stalker, I simply sought to understand the ethos and evolution of your organization.
  Your company's story resonates deeply with me, sparking a genuine interest in becoming a part of your ongoing journey. 
  I admire your commitment to continuous development and growth, traits that mirror my own aspirations for professional advancement.
  Moreover, my proficiency in Slovak, Serbian, and English positions me as a versatile asset, capable of bridging linguistic and cultural divides within your team. 
  Consider me not just as a potential employee, but as someone eager to contribute meaningfully to your company's mission and vision.
  `,
};

const whyMeInfo = {
  title: "Why me?",
  subtitle: "hmm...",
  sectionText: `
  Let me be candid with you. I'm far from perfect (but then again, who isn't?). When it comes to theoretical knowledge, 
  I may not always have all the textbook answers readily at hand. However, where I truly excel is in real-world applications. 
  Put me on a project, especially one involving technologies like React and Typescript, and watch me thrive. 
  I have a knack for diving headfirst into challenging technologies that pique my interest, and I become the best version of myself when I'm immersed in them.
  As a young individual, I possess an insatiable appetite for learning. 
  I'm not just seeking a job. I'm looking for an opportunity to grow alongside a company that values continuous development and innovation. 
  I envision myself as a valuable contributor to your team, someone who not only benefits from your company's journey but also actively contributes to its success.
  I firmly believe that my skills as a React Developer align perfectly with the direction your company is heading. 
  I'm eager to explore how we can collaborate further and discuss how I can contribute to your team's ongoing projects and initiatives. 
  Let's have a conversation and explore the possibilities together.`,
};

export const ModalGrid: React.FC = () => {
  const context: { [key: string]: any } = useContext(ProjectsContext);
  const dispatch = useAppDispatch();

  const handleOpenModal = (variant: string) => {
    switch (variant) {
      case "who":
        const whoModalInfo: IAboutModalInfo = {
          title: whoAmIInfo.title,
          subtitle: whoAmIInfo.subtitle,
          sectionText: whoAmIInfo.sectionText,
        };
        context.actions.setAboutModalInfo(whoModalInfo);
        break;
      case "experience":
        const experienceModalInfo: IAboutModalInfo = {
          title: myExperienceInfo.title,
          subtitle: myExperienceInfo.subtitle,
          sectionText: myExperienceInfo.sectionText,
        };
        context.actions.setAboutModalInfo(experienceModalInfo);
        break;
      case "whyqinshift":
        const whyQinShiftModalInfo: IAboutModalInfo = {
          title: whyQinShiftInfo.title,
          subtitle: whyQinShiftInfo.subtitle,
          sectionText: whyQinShiftInfo.sectionText,
        };
        context.actions.setAboutModalInfo(whyQinShiftModalInfo);
        break;
      case "whyme":
        const whyMeModalInfo: IAboutModalInfo = {
          title: whyMeInfo.title,
          subtitle: whyMeInfo.subtitle,
          sectionText: whyMeInfo.sectionText,
        };
        context.actions.setAboutModalInfo(whyMeModalInfo);
        break;
    }

    dispatch(setCustomModal(true));
  };

  return (
    <>
      {context.aboutModalInfo && (
        <ModalCustom
          title={context.aboutModalInfo.title}
          subtitle={context.aboutModalInfo.subtitle}
          sectionText={context.aboutModalInfo.sectionText}
        />
      )}
      <div className={styles["cards-container"]}>
        <div className={styles["cards-container-item"]}>
          <CardCustom title={whoAmIInfo.title} subtitle={whoAmIInfo.subtitle} />
          <Button size="small" onClick={() => handleOpenModal("who")}>
            Read More
          </Button>
        </div>
        <div className={styles["cards-container-item"]}>
          <CardCustom
            title={myExperienceInfo.title}
            subtitle={myExperienceInfo.subtitle}
          />
          <Button size="small" onClick={() => handleOpenModal("experience")}>
            Read More
          </Button>
        </div>
        <div className={styles["cards-container-item"]}>
          <CardCustom
            title={whyQinShiftInfo.title}
            subtitle={whyQinShiftInfo.subtitle}
          />
          <Button size="small" onClick={() => handleOpenModal("whyqinshift")}>
            Read More
          </Button>
        </div>
        <div className={styles["cards-container-item"]}>
          <CardCustom title={whyMeInfo.title} subtitle={whyMeInfo.subtitle} />
          <Button size="small" onClick={() => handleOpenModal("whyme")}>
            Read More
          </Button>
        </div>
      </div>
    </>
  );
};
