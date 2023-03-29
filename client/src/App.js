import { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import MusicPlayer from "./components/Music/MusicPlayer";
import fullCurtain from "./components/Intro/curtain-full.png";
import startShow from "./components/Intro/start-show-button.png";

const startButtonVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    y: [0, 25, 0],
    transition: {
      delay: 0.75,
      scale: { duration: 1 },
      y: { repeat: Infinity, duration: 1.5 },
    },
  },
};

const curtainVariants = {
  initial: { y: "-100vh" },
  animate: { y: 0, transition: { duration: 1 } },
};

function App() {
  const [intro, setIntro] = useState(true);
  const [start, setStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const toggleIntro = () => {
    setIntro(!intro);
  };

  const handleClick = () => {
    togglePlay();
    setTimeout(() => {
      toggleIntro();
    }, "100");
  };

  if (intro) {
    return (
      <div className="app-container">
        {start ? (
          <Intro
            setIntro={setIntro}
            handleClick={handleClick}
            isPlaying={isPlaying}
          />
        ) : (
          <>
            <motion.img
              className="full-curtain"
              initial="initial"
              animate="animate"
              variants={curtainVariants}
              src={fullCurtain}
            />
            <motion.img
              initial="initial"
              animate="animate"
              variants={startButtonVariants}
              className="start-app-button"
              src={startShow}
              alt="start show button"
              onClick={() => {
                setStart(true);
              }}
            />
          </>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <MusicPlayer />
      <GameContainer />
    </div>
  );
}

export default App;
