import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import { NavbarCustom, ModalGrid, SkillGrid, InterestGrid } from "app";

import "./About.scss";

const AboutView: React.FC = () => {
  return (
    <>
      <section>
        <div className="navbar-contaiener">
          <NavbarCustom />
        </div>
        <div className="main-about-container">
          <section className="intro-section">
            <ModalGrid />
          </section>
          <section className="skills-section ">
            <h3>#Skills</h3>
            <SkillGrid />
          </section>
          <section className="interests-section ">
            <h3>#Interests</h3>
            <InterestGrid />
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutView;
