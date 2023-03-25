import { useState } from "react";
import { categories, difficulties } from "../constants";
import { Capitalise } from "../utils/capitalise";
let selectedCategories = [];

export function GameMenu({ setStartGame, setCategory, setDifficulty }) {
  const [hiddenCategory, setHiddenCategory] = useState(true);
  const [hiddenDifficulty, setHiddenDifficulty] = useState(true);

  function handleClick(e) {
    selectedCategories.push(e.target.textContent);
    setCategory(selectedCategories.join(","));
  }

  const categoryElements = categories.map((category, index) => (
    <button key={index} onClick={(e) => handleClick(e)}>
      {Capitalise(category.replaceAll("_", " "))}
    </button>
  ));

  const difficultyElements = difficulties.map((difficulty, index) => (
    <button key={index} onClick={(e) => setDifficulty(e.target.textContent)}>
      {Capitalise(difficulty)}
    </button>
  ));

  const handleHiddenCategory = () => {
    setHiddenCategory(!hiddenCategory);
    setHiddenDifficulty(true);
  };

  const handleHiddenDifficulty = () => {
    setHiddenDifficulty(!hiddenDifficulty);
    setHiddenCategory(true);
  };

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div>
      <button onClick={handleStartGame}>Start Game!</button>

      <div>
        <button onClick={handleHiddenCategory}>Select Category</button>
        <div hidden={hiddenCategory}>{categoryElements}</div>
      </div>

      <div>
        <button onClick={handleHiddenDifficulty}>Select Difficulty</button>
        <div hidden={hiddenDifficulty}>{difficultyElements}</div>
      </div>
    </div>
  );
}
