import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
// import Highscore from "../components/Highscore";
import Question from "../components/Question";
import { getHighscores } from "../HighscoreService";
import { answerDelay } from "../constants";



export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [highscores, setHighscores] = useState([])
  const [score, setScore] = useState(0)

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
   setScore(score + 1)
   // post new score to db (waiting on function for game ending)
  }


  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
    setIsCorrect(false);
  }, [questions]);


  useEffect(()=>{
    getHighscores().then((allHighscores)=>{
    setHighscores(allHighscores);
    })
}, []);

const highestScore = Math.max.apply(Math, highscores.map(score => score.highscore))

  if (!questions.length) return "Loading...";

  const incorrectAnswers = questions[0].incorrectAnswers;
  incorrectAnswers.push(questions[0].correctAnswer);
  const allAnswers = [...new Set(incorrectAnswers)].sort();

  return (
    <>
    <div>
      <p>Highscore {highestScore}</p>
      <p>Score {score}</p>
    </div>

    <div>
      {displayAnswer ? (
        <p>Display result here!!</p>
      ) : (
        <Question question={questions[0].question} />
      )}

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
