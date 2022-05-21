import React from "react";
import { Weather } from "../Weather/Weather";

export const LandingPage = () => {
  return (
    <>
      <div className="Home-container">
        <div className="Home-text ">
          <Weather />
        </div>
      </div>
    </>
  );
};
