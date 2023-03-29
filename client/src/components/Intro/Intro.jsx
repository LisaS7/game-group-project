import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./intro.css";
import hostImg from "./host.png";
import speechBubble from "./speech_bubble.png";
import starButton from "./star-button.png";
import sideCurtains from "./side_curtains.png";
import backgroundMusic from "../Music/intro.mp3";

const hostVariants = {
  initial: { x: "50vw" },
  animate: { x: 0, transition: { duration: 2, delay: 0.5 } },
};

const speechVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
};

const buttonVariants = {
  initial: { opacity: 0, rotate: 360 },
  animate: {
    opacity: 1,
    rotate: 0,
    y: [0, 10, 0],
    transition: { duration: 1, delay: 4, y: { repeat: Infinity } },
  },
};

export default function Intro({ setIntro, handleClick, isPlaying }) {
  const song = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    isPlaying ? song.current.pause() : song.current.play();
  }, [isPlaying, []]);

  return (
    <motion.div className="intro-container" initial="initial" animate="animate">
      <img className="side-curtains" src={sideCurtains} />
      <div className="host-container">
        <motion.img variants={hostVariants} className="host" src={hostImg} />
        <motion.div
          className="speech-bubble-container"
          variants={speechVariants}
        >
          <motion.img className="speech-bubble" src={speechBubble} />
        </motion.div>
      </div>

      <motion.img
        className="intro-button"
        variants={buttonVariants}
        src={starButton}
        onClick={handleClick}
      />
    </motion.div>
  );
}
