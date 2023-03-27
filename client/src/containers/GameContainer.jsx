import { useState, useEffect } from "react";
import GameEnd from "../components/GameEnd";
import { GameMenu } from "../components/GameMenu";
import {Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import QuizContainer from "./QuizContainer";


export default function GameContainer() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gamereset, setGameReset] = useState(false);

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

  // useEffect(() => {
  
  // }, [gamereset])

  function handleGameReset() {
    setGameReset(true)
  }

  if (!data.length) return <Loading />;

  if (!startGame) {
    return (
      <div>
        <div class="logo"><b>M<span>in</span>d<span></span> <span>B</span>lan<span>k</span></b></div>
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

  if (gameEnded){
    return(
      <GameEnd handleGameReset={handleGameReset}/>
    //   <div className="game-over-container">
    //     <div className="game-over"> 
    //         <h1>Game Over</h1>
    //         <button onClick={handleReset}>Restart Game</button>
    //     </div>
    // </div>
    )
  }

  return (
    <div>
      <QuizContainer data={data} gameEnded={gameEnded} setGameEnded={setGameEnded} />
    </div>
  );
}
