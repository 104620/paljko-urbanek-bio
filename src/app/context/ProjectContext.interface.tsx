import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface IAboutModalInfo {
  title: string;
  subtitle?: string;
  sectionText: string;
}
