import React from "react";

export default function GameEnd({ setStartGame }) {
  function handleClick() {
    setStartGame(false);
  }

  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={() => handleClick()}>Restart</button>
    </div>
  );
}
