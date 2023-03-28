import { useState, useRef, useEffect } from "react";
import { backgroundMusicVolume } from "../../constants";
import backgroundMusic from "./background.mp3";
import "./MusicPlayer.css";

export default function MusicPlayer({ intro }) {
  const song = useRef(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(backgroundMusicVolume);

  useEffect(() => {
    song.current.loop = true;
    song.current.volume = volume;
    song.current.play();
  }, [volume]);

  function toggleMusic() {
    isPlaying ? song.current.pause() : song.current.play();
    setIsPlaying(!isPlaying);
  }

  function handleVolumeChange(e) {
    setVolume(e.target.value);
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
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}
