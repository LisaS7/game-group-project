import React from "react";
import { motion } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import hostCrayons from "./host_crayons.png";
import hostTrophy from "./host_trophy.png";
import speechBubbleLose1 from "./LoseSpeech1.png";
import speechBubbleLose2 from "./LoseSpeech2.png";
import speechBubbleWin1 from "./WinSpeech1.png";
import speechBubbleWin2 from "./WinSpeech2.png";
import "./GameEnd.css";

const hostVariants = {
  initial: { x: "-50vw" },
  animate: { x: 0, transition: { duration: 2, delay: 0.5 } },
};

const speechVariants1 = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
};
const speechVariants2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 7.5 } },
};

const alienVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.5, delay: 8.5 } },
};

export default function GameEnd({
  setStartGame,
  setGameEnded,
  setScore,
  score,
}) {
  function handleClick() {
    setStartGame(false);
    setGameEnded(false);
    setScore(0);
  }

  let hostImage, speechBubble1, speechBubble2, alien;
  if (score > 4) {
    hostImage = hostTrophy;
    speechBubble1 = speechBubbleWin1;
    speechBubble2 = speechBubbleWin2;
    alien = "https://assets8.lottiefiles.com/packages/lf20_xj3qhpxz.json";
  } else {
    hostImage = hostCrayons;
    speechBubble1 = speechBubbleLose1;
    speechBubble2 = speechBubbleLose2;
    alien = "https://assets8.lottiefiles.com/packages/lf20_2bjwh0kp.json";
  }

  return (
    <div className="game-over-container">
      <div className="game-over">
        <h1>Game Over</h1>
        <h3>You scored {score}</h3>
        <motion.div initial="initial" animate="animate">
          <motion.img
            variants={hostVariants}
            className="end-host"
            src={hostImage}
          />

          <motion.img
            className="end-speech-bubble"
            variants={speechVariants1}
            src={speechBubble1}
          />
          <motion.img
            className="end-speech-bubble"
            variants={speechVariants2}
            src={speechBubble2}
          />
          <motion.div className="alien" variants={alienVariants}>
            <Player
              autoplay
              loop
              speed="1"
              src={alien}
              style={{ height: "400px", width: "400px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </motion.div>
        </motion.div>
      </div>

      <button onClick={() => handleClick()}>Restart</button>
    </div>
  );
}
