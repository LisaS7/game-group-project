import { useState } from "react";
import { categories, difficulties} from "../constants";
import "./GameMenu.css";
let selectedCategories = [];

export function GameMenu({ setStartGame, setCategory, setDifficulty}) {

  const [hiddenCategory, setHiddenCategory] = useState(true)
  const [hiddenDifficulty, setHiddenDifficulty] = useState(true)
  

  function handleClick(e) {
    selectedCategories.push(e.target.textContent);
    setCategory(selectedCategories.join(","));
  }

  // {isCorrect && answer === correct ? "correct" : ""}

  const categoryElements = categories.map((category, index) => (
    <button className="btn-color btn-category" key={index} onClick={(e) => handleClick(e)}>
      {category.replaceAll('_', ' ')}
    </button>
  ));


  const difficultyElements = difficulties.map((difficulty, index) => (
    <button className="btn-color btn-size" key={index} onClick={(e) => setDifficulty((e.target.textContent))}>
      {difficulty}
    </button>
  ));


  const handleHiddenCategory = () => {
    setHiddenCategory(!hiddenCategory);
    setHiddenDifficulty(true);
  }

  const handleHiddenDifficulty = () => {
    setHiddenDifficulty(!hiddenDifficulty);
    setHiddenCategory(true);
  }

  const handleStartGame = () => {
    setStartGame(true);
  }

  return (
    
    <div className="btn-container">
      <div>
        <button className="menu-btn btn-size" onClick={handleHiddenCategory}>Select Category</button>
        <div hidden={hiddenCategory}>
          <div className="category-container">
          {categoryElements}
          </div>
        </div>
      </div>

      <div>
        <button className="menu-btn btn-size"onClick={handleHiddenDifficulty}>Select Difficulty</button>
        <div hidden={hiddenDifficulty}>
          {difficultyElements}
        </div>
      </div>
      <button className="start-quiz-btn btn-size" onClick={handleStartGame}>Start Game!</button>
    </div>
  );
}

