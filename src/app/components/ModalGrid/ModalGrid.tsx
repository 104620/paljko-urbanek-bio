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
  sectionText: `That's a great question. Sometimes I don't even know. But let's
  put a jokes aside for now. Hello dear reader I am Paljko
  Urbanek. You are wondering "what a weird name that is". Well I
  am originally from Serbia (for which I am proud of) but I have
  Slovak nationality (yes I am Slovak and I am also proud of that).
  I have lived there for 14 years in small Slovak town
  called Kovačica and then I came to Slovakia for studying "To
  see more look into the CV". I am still a student but this year
  in couple of months to my agony will come end and I will finish
  my masters studies at FEI STU in applied informatics (eternal pain feelling).`,
};

const myExperienceInfo = {
  title: "My professional experience",
  subtitle: "not boring part",
  sectionText: `My journey started last year in Zurich Insurance Group Ltd as an
  intern. My work primarly involved React, Typescript, Agile
  methodology of working, Scrum, Pipelines(a little), Azure
  DevOps, Jira, following Figma designs. Of course the development
  was under the mentorship of more experienced and senior
  colleagues. I was introduced to this new technologies that I
  didn't work before and easily fell in love with them. I am now
  trying to pursue my career with the mentioned technologies and
  with expanding my knowledge with backend development and work with databases like
  NestJS, Remix, Prisma... and oneday hopefully I can be a fullstack
  developer. I have personally worked on one project and developed
  multiple components for a team using a bit cloud for hosting
  scopes of components. As you have mentioned on your page that
  the person applying can implement their own ideas this is
  something that I would recommend if you don't have such a thing yet implemented.`,
};

const whyQinShiftInfo = {
  title: "Why Qinshift?",
  subtitle: "definitely not boring part",
  sectionText: `Although I am still a student I am looking for a full time job.
  It is a obvious move to make ('sacraficing the rook moment').
  Firstly I saw you on the Profesia.sk that you have job offers. I
  have investigate you a little (I am not a stalker or anything
  else). Your company intrigued me with your story. I found myself
  in it so yes I would be very happy to be part of that journey -
  "solving biggest challenges driven by the limitless potential".
  I saw that you are constantly developing that you are interested
  in topics that I myself am interested (like Generative AI) so I
  think that it would a perfect bond. Secondly your company
  convinced me because some of your board members like CFO Tijana
  Djurović and other people are Serbian. I saw that you have
  expanded in several balkan countries and since I am fluent in
  slovak language so as in serbian and english I think that it
  would be a useful that one of your potential employee (wink
  wink) could easily communicate with all of the parties. And yes
  I am not often using the serbian here in Slovakia so it would be
  nice to "brush up" the language.`,
};

const whyMeInfo = {
  title: "Why me?",
  subtitle: "hmm...",
  sectionText: `I will be honest with you. Of course that I am not perfect (who
    is?). I am bad at theory. I do not know exactly everything to
    say theoretically correct (refering to theoretical
    part of interviews). I am the best learner when I am working on
    the real projects and if that technology like (React,
    Typescript) drives me crazy I will learn it very easily and will
    be the best version of myself in it. As a very young person I am
    eager to learn. It would be nice if you could also see me as a
    person that can help you with your jurney because I see myself
    as a part of your company where we will grow together. I truly
    believe that I could be beneficial for your company and as a
    React Developer I see myself continuing my life jurney with you.
    It would be nice if we could talk about this a little more.`,
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
