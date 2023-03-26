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

     <div class="logo"><b>M<span>in</span>d<span></span> <span>B</span>lan<span>k</span></b></div>

      <GameContainer />
    </div>
  );
}

export default App;
