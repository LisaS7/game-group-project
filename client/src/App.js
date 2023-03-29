import { useState, useRef, useEffect } from "react";

import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import MusicPlayer from "./components/Music/MusicPlayer";
import backgroundMusic from "./components/Music/background.mp3";

function App() {
  const [intro, setIntro] = useState(true);
  const [start, setStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  const toggleIntro = () => {
    setIntro (!intro);
  }
  const handleClick = () => {
    togglePlay()
    setTimeout(() => {
      toggleIntro ()
    }, "100");
  }

  if (intro) {
    return (
      <div>
        <button onClick={() => {setStart(true)}}>start game</button>
        {start ? <Intro setIntro={setIntro} handleClick = {handleClick} isPlaying = {isPlaying} /> : null}
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