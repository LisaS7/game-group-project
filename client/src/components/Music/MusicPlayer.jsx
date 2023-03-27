import { useState, useRef, useEffect } from "react";
import { backgroundMusicVolume } from "../../constants";
import backgroundMusic from "./background.mp3";
import "./MusicPlayer.css";

export default function MusicPlayer({ intro }) {
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
    return null;
  }

  return (
    <div className="music-button">
      <p>Background Music </p>
      <button onClick={() => toggleMusic()}>
        <span className="material-symbols-outlined">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>
    </div>
  );
}
