import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import profileImage from "app/assets/background/image001-without-bg.png";
import "./Landing.scss";
import { NavbarCustom } from "app";

const appInfo = {
  headline: "Made for Qinshift..",
  description: " from Paljko Urbanek",
};

const LandingView: React.FC = () => {
  return (
    <>
      <section>
        <div className="navbar-contaiener">
          <NavbarCustom />
        </div>
        <div className="main-container">
          <div className="background-container">
            <div className="landing-panel-container">
              <div className="title-container">
                <h1>{appInfo.headline}</h1>
                <h3>{appInfo.description}</h3>
              </div>
            </div>
          </div>
          <section className="profile-image-container">
            <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LandingView;
