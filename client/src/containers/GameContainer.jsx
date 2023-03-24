import { useState, useEffect } from "react";
import { GameMenu } from "../components/GameMenu";
import QuizContainer from "./QuizContainer";

export default function GameContainer() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [startGame, setStartGame] = useState(false);

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

  if (!data.length) return "loading...";

  console.log(data);
  console.log("difficulty", difficulty);

  if (!startGame) {
    return (
      <div>
        <GameMenu
          setStartGame={setStartGame}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
        />
      </div>
    );
  }

  return (
    <div>
      <QuizContainer data={data} />
    </div>
  );
}
