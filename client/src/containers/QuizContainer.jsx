import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Question from "../components/Question";
import { answerDelay, correctAlien, incorrectAlien } from "../constants";
import Timer from "../components/Timer";
import Loading from "../components/Loading";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import "./QuizContainer.css";

export default function QuizContainer({
  data,
  gameEnded,
  setGameEnded,
  setStartGame,
  getData,
  highestScore,
  score,
  setScore,
}) {
  const [questions, setQuestions] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function questionAnswered() {
    setDisplayAnswer(true);
    setTimeout(function () {
      const questionsCopy = [...questions];
      setQuestions(questionsCopy.slice(1));
    }, answerDelay);
  }

  function correctAnswer() {
    setIsCorrect(true);
    // add points to score
    setScore(score + 1);
    // post new score to db (waiting on function for game ending)
  }

  function handleReturn() {
    setStartGame(false);
    getData();
  }

  function handleReset() {
    setScore(0);
    setQuestions(data);
    getData();
  }

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
    setIsCorrect(false);
  }, [questions]);

  if (!questions.length) return <Loading />;

  const incorrectAnswers = questions[0].incorrectAnswers;
  incorrectAnswers.push(questions[0].correctAnswer);
  const allAnswers = [...new Set(incorrectAnswers)].sort();

  const numberVariants = {
    initial: { y: 0 },
    correct: {
      y: [0, -96],
      transition: { duration: 0.5, delay: 0.5 },
    },
    incorrect: {
      y: 0,
    },
  };

  return (
    <>
      <div>
        <button onClick={handleReturn}>Return To Menu</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="scores-container">
        <p className="score">Highscore {highestScore}</p>
        <div>
          Score{" "}
          <div className="score-numbers">
            <motion.p
              className="score"
              initial="initial"
              animate={isCorrect ? "correct" : "incorrect"}
              variants={numberVariants}
            >
              {isCorrect ? score - 1 : score}
            </motion.p>
            <motion.p
              className="score"
              initial="initial"
              animate={isCorrect ? "correct" : "incorrect"}
              variants={numberVariants}
            >
              {isCorrect ? score : ""}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container-for-all">
        {displayAnswer ? (
          <div>
            <Player
              autoplay
              speed="1"
              src={isCorrect ? correctAlien : incorrectAlien}
              style={{ height: "200px", width: "200px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        ) : (
          <Question question={questions[0].question} />
        )}

        <div>
          <Timer
            duration={60}
            gameEnded={gameEnded}
            setGameEnded={setGameEnded}
          />
        </div>

        <Answer
          correct={questions[0].correctAnswer}
          allAnswers={allAnswers}
          questionAnswered={questionAnswered}
          correctAnswer={correctAnswer}
          isCorrect={isCorrect}
        />
      </div>
    </>
  );
}
