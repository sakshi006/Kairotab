import React from "react";
import "./Landingpage.css"
import { Weather, Time, Stackoverflow, Quotes, GoogleSearch, MyntraSearch } from "../../Components";

export const LandingPage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <Time />
          <Weather />
          <Quotes/>
          <GoogleSearch/>
          <Stackoverflow/>
          <MyntraSearch/>
        </div>
      </div>
    </>
  );
};
