import { useState, useRef, useEffect } from "react";
import { backgroundMusicVolume } from "../../constants";
import gameMusic from "./game.mp3";
import "./MusicPlayer.css";

export default function MusicPlayer({ intro }) {
  const song = useRef(new Audio(gameMusic));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(backgroundMusicVolume);

  useEffect(() => {
    song.current.loop = true;
    song.current.volume = volume;
  }, [volume]);

  function handleVolumeChange(e) {
    setVolume(e.target.value);
  }

  useEffect(() => {
    song.current.loop = true;
    isPlaying ? song.current.pause() : song.current.play();
  }, [isPlaying, []]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function handleVolumeChange(e) {
    setVolume(e.target.value);
  }

  if (intro) {
    return null;
  }

  return (
    <div className="music-button">
      <p>Background Music </p>
      <button onClick={() => togglePlay()}>
        <span className="material-symbols-outlined">
          {!isPlaying ? "pause" : "play_arrow"}
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
