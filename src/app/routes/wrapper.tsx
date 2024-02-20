import React from "react";

import { LandingView, AboutView } from "pages";

import { ProjectsContextWrapper } from "app/context";

export const AboutWrapper: React.FC = () => {
  return (
    <>
      <ProjectsContextWrapper>
        <AboutView />
      </ProjectsContextWrapper>
    </>
  );
};

export const LandingWrapper: React.FC = () => {
  return (
    <>
      <ProjectsContextWrapper>
        <LandingView />
      </ProjectsContextWrapper>
    </>
  );
};
