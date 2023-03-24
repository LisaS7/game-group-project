import { categories, difficulties } from "../constants";
let selectedCategories = [];

export function GameMenu({ setStartGame, setCategory, setDifficulty }) {
  function handleClick(e) {
    selectedCategories.push(e.target.textContent);
    setCategory(selectedCategories.join(","));
  }

  const categoryElements = categories.map((category, index) => (
    <button key={index} onClick={(e) => handleClick(e)}>
      {category}
    </button>
  ));

  const difficultyElements = difficulties.map((difficulty, index) => (
    <button key={index} onClick={(e) => setDifficulty(e.target.textContent)}>
      {difficulty}
    </button>
  ));

  return (
    <div>
      <h1>menu</h1>
      {categoryElements}
      {difficultyElements}
    </div>
  );
}
