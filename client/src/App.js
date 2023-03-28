import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import MusicPlayer from "./components/Music/MusicPlayer";
import IntroMusicPlayer from "./components/IntroMusicPlayer";

      <MusicPlayer intro={true} />

function App() {
  const [intro, setIntro] = useState(true);
  <MusicPlayer intro={true} />

  if (intro) {
    return (
      <div>
        <IntroMusicPlayer intro = {true}/>
        <Intro setIntro={setIntro} />
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
