import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
