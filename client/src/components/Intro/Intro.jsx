import { motion } from "framer-motion";
import "./intro.css";
import hostImg from "./host.png";
import speechBubble from "./speech_bubble.png";

const hostVariants = {
  initial: { x: "50vw" },
  animate: { x: 0, transition: { duration: 2, delay: 0.5 } },
};

const speechVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
};

export default function Intro({ setIntro }) {
  return (
    <div className="intro-container">
      <div className="host-container">
        <motion.img
          initial="initial"
          animate="animate"
          variants={hostVariants}
          className="host"
          src={hostImg}
        />
        <motion.div
          className="speech-bubble-container"
          initial="initial"
          animate="animate"
          variants={speechVariants}
        >
          <motion.img className="speech-bubble" src={speechBubble} />
          <p className="speech-text">Welcome to "quizname"!</p>
        </motion.div>
      </div>

      <button className="intro-button" onClick={() => setIntro(false)}>
        Let's Go!
      </button>
    </div>
  );
}
