import { useState, useRef, useEffect } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import backgroundMusic from "../src/background.mp3";
import { backgroundMusicVolume } from "./constants";

function App() {
  const [intro, setIntro] = useState(true);
  const song = useRef(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    song.current.loop = true;
    song.current.volume = backgroundMusicVolume;
    song.current.play();
  }, []);

  function toggleMusic() {
    isPlaying ? song.current.pause() : song.current.play();
    setIsPlaying(!isPlaying);
  }

  if (intro) {
    return (
      <div>
        <Intro setIntro={setIntro} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="music-button">
        <p>Background Music </p>
        <button onClick={() => toggleMusic()}>
          <span className="material-symbols-outlined">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>
      <GameContainer />
    </div>
  );
}

export default App;
