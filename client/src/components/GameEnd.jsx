import React from "react";
import "./GameEnd.css";

export default function GameEnd({ setStartGame }) {
  function handleClick() {
    setStartGame(false);
  }

  return (
    <div className="game-over-container">
        <div className="game-over">
            <h1>Game Over</h1>
            <button onClick={() => handleClick()}>Restart</button>
         </div>
    </div>
  );

}
