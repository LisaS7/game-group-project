import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

          <Router>
            <Routes>
              <Route path="/" element={
                  <GameContainer />}/>
          </Routes>
        </Router>
    </div>
  );

}

export default App;
