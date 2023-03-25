import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [intro, setIntro] = useState(true);

  if (intro) {
    return (
      <div>
        <AnimatePresence>
          <Intro setIntro={setIntro} />
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="App">

      <h1>Mind Blank</h1>

      <GameContainer />
    </div>
  );
}

export default App;
