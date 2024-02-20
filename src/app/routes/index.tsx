import React from "react";
import { RouteObject } from "react-router-dom";
import { ContactsView } from "pages";
import { LandingWrapper, AboutWrapper } from "./wrapper";

export const Routess = (): RouteObject[] => [
  {
    path: "/",
    element: <LandingWrapper />,
  },
  {
    path: "/about",
    element: <AboutWrapper />,
  },
  {
    path: "/contacts",
    element: <ContactsView />,
  },
];
