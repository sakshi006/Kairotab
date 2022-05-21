import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("name", user);
      window.location.reload(false);
    }
  };

  return (
    <div className="home-container">
      <div className="home-text">
        <h2>Hey there! What should I call you ?</h2>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />

        {user.length > 0 && (
          <button
            onClick={() => {
              localStorage.setItem("name", user);
              window.location.reload(false);
            }}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};
