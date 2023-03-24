import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Question from "../components/Question";
import { answerDelay } from "../constants";
import { shuffle } from "../utils/shuffle";

export default function QuizContainer({ data }) {
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
  }

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
    setIsCorrect(false);
  }, [questions]);

  if (!questions.length) return "Loading...";

  const incorrectAnswers = questions[0].incorrectAnswers;
  incorrectAnswers.push(questions[0].correctAnswer);
  const allAnswers = [...new Set(incorrectAnswers)].sort();

  return (
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
  );
}
