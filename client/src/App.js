import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import backgroundMusic from "../src/background.mp3";

let song = new Audio(backgroundMusic);

function App() {
  const [intro, setIntro] = useState(true);
  song.loop = true;
  song.play();

  if (intro) {
    return (
      <div>
        <Intro setIntro={setIntro} />
      </div>
    );
  }

  return (
    <div className="App">
      <GameContainer />
    </div>
  );
}

export default App;
