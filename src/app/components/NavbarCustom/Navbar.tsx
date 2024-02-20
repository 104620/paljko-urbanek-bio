import React from "react";
import { Navbar } from "flowbite-react";
import styles from "./Navbar.module.scss";

export const NavbarCustom: React.FC = () => {
  return (
    <>
      <Navbar className={styles["landing-navbar"]}>
        <Navbar.Toggle />
        <Navbar.Collapse className={styles["navbar-link-list"]}>
          <Navbar.Link
            className={styles["navbar-link-item"]}
            href="/paljko-urbanek-bio-qinshift/"
            active
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className={styles["navbar-link-item"]}
            as={undefined}
            href="/paljko-urbanek-bio-qinshift/about"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            className={styles["navbar-link-item"]}
            href="/paljko-urbanek-bio-qinshift/contacts"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
