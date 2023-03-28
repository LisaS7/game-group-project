import { useEffect, useRef, useState } from "react";
import introMusic from "./Music/start.mp3";
import { introMusicVolume } from "./../constants";

export default function IntroMusicPLayer ({intro}) {
const song = useRef(new Audio(introMusic));
const [introtrue] = useState({intro})

  useEffect(() => {
    song.current.loop = true;
    song.current.volume = introMusicVolume;
    song.current.play();
  }, [introtrue])
  if (introtrue) {
    return (null)
  }
};
