import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import { NavbarCustom, ContactGrid } from "app";

import "./Contacts.scss";

const ContactsView: React.FC = () => {
  return (
    <>
      <section>
        {/* <div className="navbar-contaiener">
          <NavbarCustom />
        </div> */}
        <div className="main-contact-container">
          <section className="intro-contact-section">
            <ContactGrid />
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactsView;
