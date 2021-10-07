import React, { useState, useEffect } from "react";
import "./games.css";
// MOVING TO REGULAR JAVASCIPT
export const JumpGame = () => {
  const [enemy, setEnemy] = useState({});
  const [playerPosition, setPlayerPosition] = useState({
    backgroundColor: "green",
  });
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        Jump();
      }
    });
  }, []);
  function Jump() {
    setPlayerPosition({
      backgroundColor: "purple",
     
    });
    setTimeout(() => {
      setPlayerPosition({
        backgroundColor: "green",
      });
    }, 300);
  }
  return (
    <div className="masterDiv">
      <div className="jumpgameBox">
        Try and survive lol
        <div style={playerPosition} className="player"></div>
        <div style={enemy} className="enemy"></div>
      </div>
    </div>
  );
};
