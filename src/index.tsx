import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { AboutWrapper, LandingWrapper } from "app/routes/wrapper";
import { ContactsView } from "pages";
// import { BrowserRouter, Router, useRoutes } from "react-router-dom";
import { Routess, store } from "app";
import "./index.css";

const App: React.FC = () => {
  // const routing = useRoutes(Routess());
  return (
    <Routes>
      <Route path="/" element={<LandingWrapper />} />
      <Route path="/about" element={<AboutWrapper />} />
      <Route path="/contacts" element={<ContactsView />} />
    </Routes>
  );
};

const container = document.getElementById("root");

const baseURLName = process.env.PUBLIC_URL + "/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={baseURLName}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  container
);
