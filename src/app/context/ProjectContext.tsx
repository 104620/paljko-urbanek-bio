import React, { useState, useMemo } from "react";

import { IAboutModalInfo, Props } from "./ProjectContext.interface";

export const ProjectsContext = React.createContext({});

export const ProjectsContextWrapper = ({ children }: Props): JSX.Element => {
  const [aboutModalInfo, setAboutModalInfo] = useState<
    IAboutModalInfo | undefined
  >(undefined);

  const actions = useMemo(
    () => ({
      setAboutModalInfo: (info: any) => {
        setAboutModalInfo(info);
      },
      clearAboutModalInfo: () => setAboutModalInfo(undefined),
    }),
    []
  );

  return (
    <ProjectsContext.Provider
      value={{
        actions,
        aboutModalInfo,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextWrapper;
