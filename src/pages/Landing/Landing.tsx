import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import profileImage from "app/assets/background/image001-without-bg.png";
import "./Landing.scss";
import { NavbarCustom } from "app";
import { AboutView } from "pages/About";
import { ContactsView } from "pages/Contacts";
import { useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

const appInfo = {
  headline: "Made for Qinshift..",
  description: " from Paljko Urbanek",
};

const LandingView: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <>
      <div className="navbar-contaiener">
        {/* <NavbarCustom /> */}
        <Navbar className={"landing-navbar"}>
          <Navbar.Toggle />
          <Navbar.Collapse className={"navbar-link-list"}>
            <Button
              className={"navbar-link-item"}
              onClick={() => setActivePage("home")}
            >
              Home
            </Button>
            <Button
              className={"navbar-link-item"}
              onClick={() => setActivePage("about")}
            >
              About
            </Button>
            <Button
              className={"navbar-link-item"}
              onClick={() => setActivePage("contact")}
            >
              Contact
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {activePage === "home" && (
        <section>
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
      )}
      {activePage === "about" && <AboutView />}
      {activePage === "contact" && <ContactsView />}
    </>
  );
};

export default LandingView;
