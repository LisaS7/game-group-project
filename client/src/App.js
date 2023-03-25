import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import GameContainer from "./containers/GameContainer";

function App() {
  const [intro, setIntro] = useState(true);

  if (intro) {
    return <Intro setIntro={setIntro} />;
  }

  return (
    <div className="App">
      <GameContainer />
    </div>
  );
}

export default App;
