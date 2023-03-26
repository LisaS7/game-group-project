import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import "./QuizContainer.css";
// import Highscore from "../components/Highscore";
import Question from "../components/Question";
import { getHighscores } from "../HighscoreService";
import { answerDelay } from "../constants";
import Loading from "../components/Loading";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import "./QuizContainer.css";

export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [highscores, setHighscores] = useState([]);
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
    setIsCorrect(false);
  }, [questions]);

  useEffect(() => {
    getHighscores().then((allHighscores) => {
      setHighscores(allHighscores);
    });
  }, []);

  let highestScore;
  if (highscores.length) {
    highestScore = Math.max.apply(
      Math,
      highscores.map((score) => score.highscore)
    );
  } else {
    highestScore = 0;
  }

  if (!questions.length) return <Loading />;

  const incorrectAnswers = questions[0].incorrectAnswers;
  incorrectAnswers.push(questions[0].correctAnswer);
  const allAnswers = [...new Set(incorrectAnswers)].sort();

  const variants = {
    initial: { opacity: 1 },
    correct: {
      opacity: [0, 1, 0],
      transition: { duration: 1.5, delay: 0.5 },
    },
    incorrect: {
      opacity: 0,
    },
  };

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

      <div className="quiz-container">
        {displayAnswer ? (
          <p>
            {isCorrect ? (
              <Player
                autoplay
                speed="1"
                src="https://assets8.lottiefiles.com/packages/lf20_xj3qhpxz.json"
                style={{ height: "150px", width: "150px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            ) : (
              <Player
                autoplay
                speed="1"
                src="https://assets8.lottiefiles.com/packages/lf20_2bjwh0kp.json"
                style={{ height: "150px", width: "150px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            )}
          </p>
        ) : (
          <Question question={questions[0].question} />
        )}
        <div className="answer-display">
          <Answer
            correct={questions[0].correctAnswer}
            allAnswers={allAnswers}
            questionAnswered={questionAnswered}
            correctAnswer={correctAnswer}
            isCorrect={isCorrect}
          />
        </div>
      </div>
    </>
  );
}
