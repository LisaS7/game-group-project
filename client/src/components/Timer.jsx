import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ duration, gameEnded, setGameEnded, handleTimerReset}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const percentageLeft = (timeLeft / duration) * 100;

  if (percentageLeft === 0) {
    setTimeout(() => {
      setGameEnded(true);
    }, 1010);
  }


  return (
    <>
      <div className="timer-bar-container">
        <div className="timer-bar" style={{ width: `${percentageLeft}%` }} />
      </div>
    </>
  );
};

export default Timer;
