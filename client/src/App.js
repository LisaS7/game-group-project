import { useState } from "react";

import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import MusicPlayer from "./components/Music/MusicPlayer";

function App() {
  const [intro, setIntro] = useState(true);

  if (intro) {
    return (
      <div>
        <MusicPlayer intro={true} />
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
