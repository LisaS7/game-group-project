import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ duration}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
      if (timeLeft === 0) {
        // endGame();                    waiting for end game function
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const percentageLeft = (timeLeft / duration) * 100;

  return (
    <>
    <div className="timer-bar-container">
      <div className="timer-bar" style={{ width: `${percentageLeft}%` }} />
    </div>
    </>
  );
};

export default Timer;
