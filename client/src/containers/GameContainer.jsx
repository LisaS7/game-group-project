import { useState, useEffect } from "react";
import GameEnd from "../components/GameEnd";
import { GameMenu } from "../components/GameMenu";
import Loading from "../components/Loading";
import QuizContainer from "./QuizContainer";

import {
  getHighscores,
  postHighscores,
  updateHighscore,
} from "../HighscoreService";
import { addHighscores } from "../HighscoreService";

export default function GameContainer() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [newHighscore, setNewHighscore] = useState({});
  const [highscores, setHighscores] = useState([]);

  console.log(highscores);

  async function getData() {
    const url = `https://the-trivia-api.com/api/questions?${
      category && `categories=${category}`
    }&limit=50&${difficulty && `difficulty=${difficulty}`}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    getData();
  }, [category]);

  //  BACKEND SCORE DATA SECTION
  useEffect(() => {
    getHighscores().then((allHighscores) => {
      setHighscores(allHighscores);
    });
  }, []);

  console.log("highscores", highscores);

  const eachHighScore = highscores.map((highscore) => {
    return highscore.highscore;
  });
  // this gets back an array of scores
  console.log("each high score:", eachHighScore);

  // when the game ends, the app should look to see if the current score is higher than the highscore that is being displayed and if it is, it should save the highscore to the database and update the highscore

  let highestScore;
  if (highscores.length) {
    highestScore = Math.max.apply(
      Math,
      highscores.map((score) => score.highscore)
    );
  } else {
    highestScore = 0;
  }

  console.log("highest score", highestScore);

  const addNewHighscore = (score) => {
    setHighscores([...highscores, score]);
  };

  if (!data.length) return <Loading />;

  if (!startGame) {
    return (
      <div>
        <div className="logo">
          <b>
            M<span>in</span>d<span></span> <span>B</span>lan<span>k</span>
          </b>
        </div>
        <GameMenu
          setStartGame={setStartGame}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          category={category}
        />
      </div>
    );
  }

  if (gameEnded) {
    return (
      <div>
        <GameEnd setStartGame={setStartGame} />
      </div>
    );
  }

  return (
    <div>
      <QuizContainer
        data={data}
        gameEnded={gameEnded}
        setGameEnded={setGameEnded}
        setStartGame={setStartGame}
        getData={getData}
        highestScore={highestScore}
        addNewHighscore={addNewHighscore}
      />
    </div>
  );
}
