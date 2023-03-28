import { useState } from "react";
import { motion } from "framer-motion";
import { categories, difficulties } from "../constants";
import "./GameMenu.css";
import { Capitalise } from "../utils/capitalise";
let selectedCategories = [];

const animateButtonVariants = {
  initial: { scale: 0, x: "10vw" },
  animate: { scale: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
};

const startButtonVariants = {
  initial: { scale: 0, y: "50vh" },
  animate: {
    scale: [1, 1.1, 1],
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      scale: { repeat: Infinity },
    },
  },
};

export function GameMenu({ setStartGame, setCategory, setDifficulty }) {
  const [hiddenCategory, setHiddenCategory] = useState(true);
  const [hiddenDifficulty, setHiddenDifficulty] = useState(true);

  function handleClick(e) {
    const category = e.target.textContent;
    // setCategory(category)
    if (selectedCategories.includes(category)) {
      const index = selectedCategories.indexOf(category);
      selectedCategories.splice(index, 1);
      e.target.classList.remove("background-green");
    } else {
      selectedCategories.push(category);
      e.target.classList.add("background-green");
    }
    setCategory(selectedCategories.join(","));
  }

  function handleDifficulty(e) {
    if (e.target.classList.contains("background-green")) {
      e.target.classList.remove("background-green");
    } else {
      e.target.classList.add("background-green");
    }
  }

  const categoryElements = categories.map((category, index) => (
    <button
      className="menu-btn btn-color btn-category"
      key={index}
      onClick={(e) => handleClick(e)}
    >
      {Capitalise(category.replaceAll("_", " "))}
    </button>
  ));

  const difficultyElements = difficulties.map((difficulty, index) => (
    <button
      className="menu-btn btn-color btn-size"
      key={index}
      onClick={(e) => {
        handleDifficulty(e);
        const diff = e.target.textContent.toLowerCase();
        setDifficulty(diff);
      }}
    >
      {Capitalise(difficulty)}
    </button>
  ));

  const handleHiddenCategory = () => {
    setHiddenCategory(!hiddenCategory);
    setHiddenDifficulty(true);
    selectedCategories = [];
  };

  const handleHiddenDifficulty = () => {
    setHiddenDifficulty(!hiddenDifficulty);
    setHiddenCategory(true);
  };

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <motion.div className="btn-container" initial="initial" animate="animate">
      <div>
        <motion.button
          className="menu-btn btn-size"
          onClick={handleHiddenCategory}
          variants={animateButtonVariants}
        >
          Select Category
        </motion.button>
        <div hidden={hiddenCategory}>
          <div className="category-container">{categoryElements}</div>
        </div>
      </div>
      <div>
        <motion.button
          className="menu-btn btn-size"
          onClick={handleHiddenDifficulty}
          variants={animateButtonVariants}
        >
          Select Difficulty
        </motion.button>
        <div hidden={hiddenDifficulty}>{difficultyElements}</div>
      </div>
      <motion.button
        className="start-quiz-btn btn-size"
        onClick={handleStartGame}
        variants={startButtonVariants}
      >
        Start Game!
      </motion.button>
    </motion.div>
  );
}
